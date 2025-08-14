import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Clock, BookOpen, Target, CheckCircle, AlertCircle, Lightbulb, Download, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface WorksheetQuestion {
  id: string;
  type: 'text' | 'textarea' | 'multiple-choice' | 'scale' | 'checklist' | 'ranking' | 'matrix' | 'file-upload';
  question: string;
  description?: string;
  required: boolean;
  options?: string[];
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: string[];
  checklistItems?: string[];
  matrixRows?: string[];
  matrixColumns?: string[];
  placeholder?: string;
  hint?: string;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export interface WorksheetSection {
  id: string;
  title: string;
  description?: string;
  questions: WorksheetQuestion[];
  timeEstimate?: string;
  learningObjectives?: string[];
}

export interface WorksheetBuilderProps {
  title: string;
  description: string;
  sections: WorksheetSection[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  learningObjectives: string[];
  onComplete?: (answers: Record<string, any>) => void;
  onSave?: (answers: Record<string, any>) => void;
  allowPartialSave?: boolean;
}

const EnhancedWorksheetBuilder: React.FC<WorksheetBuilderProps> = ({
  title,
  description,
  sections,
  difficulty,
  estimatedTime,
  learningObjectives,
  onComplete,
  onSave,
  allowPartialSave = true
}) => {
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [currentSection, setCurrentSection] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load saved answers from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`worksheet-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, [title]);

  // Auto-save functionality
  useEffect(() => {
    if (allowPartialSave && Object.keys(answers).length > 0) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(`worksheet-${title.replace(/\s+/g, '-').toLowerCase()}`, JSON.stringify(answers));
        setLastSaved(new Date());
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [answers, allowPartialSave, title]);

  const updateAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    // Clear error when user starts typing
    if (errors[questionId]) {
      setErrors(prev => ({ ...prev, [questionId]: '' }));
    }
  };

  const validateQuestion = (question: WorksheetQuestion): string => {
    const answer = answers[question.id];
    
    if (question.required && (!answer || answer === '' || (Array.isArray(answer) && answer.length === 0))) {
      return 'This field is required';
    }

    if (question.validation && answer) {
      if (question.validation.minLength && answer.length < question.validation.minLength) {
        return `Minimum ${question.validation.minLength} characters required`;
      }
      if (question.validation.maxLength && answer.length > question.validation.maxLength) {
        return `Maximum ${question.validation.maxLength} characters allowed`;
      }
      if (question.validation.pattern && !new RegExp(question.validation.pattern).test(answer)) {
        return 'Invalid format';
      }
    }

    return '';
  };

  const validateSection = (sectionIndex: number): boolean => {
    const section = sections[sectionIndex];
    const newErrors: Record<string, string> = {};
    let isValid = true;

    section.questions.forEach(question => {
      const error = validateQuestion(question);
      if (error) {
        newErrors[question.id] = error;
        isValid = false;
      }
    });

    setErrors(prev => ({ ...prev, ...newErrors }));
    return isValid;
  };

  const calculateProgress = (): number => {
    const allQuestions = sections.flatMap(section => section.questions);
    const answeredQuestions = allQuestions.filter(q => {
      const answer = answers[q.id];
      return answer !== undefined && answer !== '' && (!Array.isArray(answer) || answer.length > 0);
    });
    return Math.round((answeredQuestions.length / allQuestions.length) * 100);
  };

  const calculateSectionProgress = (sectionIndex: number): number => {
    const section = sections[sectionIndex];
    const answeredQuestions = section.questions.filter(q => {
      const answer = answers[q.id];
      return answer !== undefined && answer !== '' && (!Array.isArray(answer) || answer.length > 0);
    });
    return Math.round((answeredQuestions.length / section.questions.length) * 100);
  };

  const handleNext = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => Math.min(prev + 1, sections.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentSection(prev => Math.max(prev - 1, 0));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(answers);
      setLastSaved(new Date());
    }
  };

  const handleComplete = () => {
    const allSectionsValid = sections.every((_, index) => validateSection(index));
    
    if (allSectionsValid && onComplete) {
      onComplete(answers);
      localStorage.removeItem(`worksheet-${title.replace(/\s+/g, '-').toLowerCase()}`);
    }
  };

  const exportAnswers = () => {
    const exportData = {
      worksheet: title,
      completedAt: new Date().toISOString(),
      sections: sections.map(section => ({
        title: section.title,
        questions: section.questions.map(q => ({
          question: q.question,
          answer: answers[q.id] || ''
        }))
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '-').toLowerCase()}-answers.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderQuestion = (question: WorksheetQuestion) => {
    const hasError = !!errors[question.id];
    const answer = answers[question.id];

    const questionContent = (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={question.id} className={cn("text-base font-medium", hasError && "text-destructive")}>
            {question.question}
            {question.required && <span className="text-destructive ml-1">*</span>}
          </Label>
          {question.description && (
            <p className="text-sm text-muted-foreground">{question.description}</p>
          )}
        </div>

        {question.type === 'text' && (
          <Input
            id={question.id}
            value={answer || ''}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
            placeholder={question.placeholder}
            className={cn(hasError && "border-destructive")}
          />
        )}

        {question.type === 'textarea' && (
          <Textarea
            id={question.id}
            value={answer || ''}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className={cn(hasError && "border-destructive")}
          />
        )}

        {question.type === 'multiple-choice' && (
          <RadioGroup
            value={answer || ''}
            onValueChange={(value) => updateAnswer(question.id, value)}
            className="space-y-2"
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                <Label htmlFor={`${question.id}-${index}`} className="text-sm">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {question.type === 'checklist' && (
          <div className="space-y-2">
            {question.checklistItems?.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${index}`}
                  checked={(answer || []).includes(item)}
                  onCheckedChange={(checked) => {
                    const currentAnswers = answer || [];
                    if (checked) {
                      updateAnswer(question.id, [...currentAnswers, item]);
                    } else {
                      updateAnswer(question.id, currentAnswers.filter((a: string) => a !== item));
                    }
                  }}
                />
                <Label htmlFor={`${question.id}-${index}`} className="text-sm">{item}</Label>
              </div>
            ))}
          </div>
        )}

        {question.type === 'scale' && (
          <div className="space-y-4">
            <div className="px-3">
              <Slider
                value={[answer || question.scaleMin || 1]}
                onValueChange={(value) => updateAnswer(question.id, value[0])}
                min={question.scaleMin || 1}
                max={question.scaleMax || 10}
                step={1}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{question.scaleLabels?.[0] || question.scaleMin}</span>
              <span className="font-medium">Current: {answer || question.scaleMin || 1}</span>
              <span>{question.scaleLabels?.[1] || question.scaleMax}</span>
            </div>
          </div>
        )}

        {question.hint && (
          <div className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
            <Lightbulb className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{question.hint}</p>
          </div>
        )}

        {hasError && (
          <div className="flex items-center space-x-2 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{errors[question.id]}</span>
          </div>
        )}
      </div>
    );

    return (
      <Card key={question.id} className="mb-6">
        <CardContent className="p-6">
          {questionContent}
        </CardContent>
      </Card>
    );
  };

  const currentSectionData = sections[currentSection];
  const progress = calculateProgress();
  const sectionProgress = calculateSectionProgress(currentSection);
  const isLastSection = currentSection === sections.length - 1;
  const canComplete = progress >= 80;

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <CardTitle className="text-2xl">{title}</CardTitle>
                <Badge className={getDifficultyColor(difficulty)}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-base">{description}</CardDescription>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime}</span>
            </div>
          </div>

          {/* Learning Objectives */}
          {learningObjectives.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-sm">Learning Objectives</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                {learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Section Navigation */}
          <div className="flex items-center space-x-2">
            {sections.map((section, index) => (
              <Button
                key={index}
                variant={index === currentSection ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentSection(index)}
                className="text-xs"
              >
                {index + 1}. {section.title}
                {calculateSectionProgress(index) === 100 && (
                  <CheckCircle className="h-3 w-3 ml-1" />
                )}
              </Button>
            ))}
          </div>
        </CardHeader>
      </Card>

      {/* Current Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>{currentSectionData.title}</span>
              </CardTitle>
              {currentSectionData.description && (
                <CardDescription>{currentSectionData.description}</CardDescription>
              )}
            </div>
            {currentSectionData.timeEstimate && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{currentSectionData.timeEstimate}</span>
              </div>
            )}
          </div>

          {/* Section Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Section Progress</span>
              <span className="text-sm text-muted-foreground">{sectionProgress}%</span>
            </div>
            <Progress value={sectionProgress} className="w-full" />
          </div>

          {/* Learning Objectives for Section */}
          {currentSectionData.learningObjectives && (
            <div className="space-y-2">
              <span className="font-medium text-sm">Section Objectives:</span>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                {currentSectionData.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          )}
        </CardHeader>
      </Card>

      {/* Questions */}
      <div className="space-y-4">
        {currentSectionData.questions.map(renderQuestion)}
      </div>

      {/* Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSection === 0}
              >
                Previous Section
              </Button>
              
              {!isLastSection ? (
                <Button onClick={handleNext}>
                  Next Section
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  disabled={!canComplete}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Complete Worksheet
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-3">
              {allowPartialSave && (
                <Button variant="outline" onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Progress
                </Button>
              )}
              
              <Button variant="outline" onClick={exportAnswers}>
                <Download className="h-4 w-4 mr-2" />
                Export Answers
              </Button>
            </div>
          </div>

          {lastSaved && (
            <p className="text-xs text-muted-foreground mt-3">
              Last saved: {lastSaved.toLocaleTimeString()}
            </p>
          )}

          {!canComplete && isLastSection && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">
                  Complete at least 80% of questions to finish the worksheet
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedWorksheetBuilder;