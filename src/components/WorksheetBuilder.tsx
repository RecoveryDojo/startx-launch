import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Plus, Trash2 } from 'lucide-react';

interface WorksheetQuestion {
  id: string;
  type: 'text' | 'textarea' | 'checklist' | 'scale' | 'multiple-choice';
  question: string;
  required?: boolean;
  options?: string[];
  checklistItems?: { id: string; text: string; completed: boolean }[];
}

interface WorksheetBuilderProps {
  title: string;
  description: string;
  questions: WorksheetQuestion[];
  onComplete?: (answers: Record<string, any>) => void;
  savedAnswers?: Record<string, any>;
}

const WorksheetBuilder: React.FC<WorksheetBuilderProps> = ({
  title,
  description,
  questions,
  onComplete,
  savedAnswers = {}
}) => {
  const [answers, setAnswers] = useState<Record<string, any>>(savedAnswers);

  const updateAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const toggleChecklistItem = (questionId: string, itemId: string) => {
    const question = questions.find(q => q.id === questionId);
    if (!question?.checklistItems) return;

    const currentItems = answers[questionId] || question.checklistItems.map(item => ({ ...item }));
    const updatedItems = currentItems.map((item: any) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    
    updateAnswer(questionId, updatedItems);
  };

  const completionPercentage = Math.round(
    (Object.keys(answers).filter(key => {
      const answer = answers[key];
      return answer !== undefined && answer !== null && answer !== '';
    }).length / questions.length) * 100
  );

  const handleComplete = () => {
    onComplete?.(answers);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{completionPercentage}% complete</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <Card key={question.id}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <span>{question.question}</span>
                {question.required && <span className="text-destructive">*</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {question.type === 'text' && (
                <Input
                  placeholder="Enter your answer..."
                  value={answers[question.id] || ''}
                  onChange={(e) => updateAnswer(question.id, e.target.value)}
                />
              )}

              {question.type === 'textarea' && (
                <Textarea
                  placeholder="Enter your detailed answer..."
                  value={answers[question.id] || ''}
                  onChange={(e) => updateAnswer(question.id, e.target.value)}
                  className="min-h-[120px]"
                />
              )}

              {question.type === 'multiple-choice' && (
                <div className="space-y-2">
                  {question.options?.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={answers[question.id] === option}
                        onChange={(e) => updateAnswer(question.id, e.target.value)}
                        className="text-primary"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === 'scale' && (
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Not at all</span>
                    <span>Extremely</span>
                  </div>
                  <div className="flex justify-between">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => updateAnswer(question.id, num)}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                          answers[question.id] === num
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {question.type === 'checklist' && (
                <div className="space-y-2">
                  {(answers[question.id] || question.checklistItems || []).map((item: any) => (
                    <div key={item.id} className="flex items-center space-x-3 p-2 rounded-lg border hover:bg-secondary/50 transition-colors">
                      <button onClick={() => toggleChecklistItem(question.id, item.id)}>
                        {item.completed ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      <span className={item.completed ? 'line-through text-muted-foreground' : ''}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Complete Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={handleComplete}
          size="lg"
          disabled={completionPercentage < 80}
          className="px-8"
        >
          Complete Worksheet
        </Button>
      </div>
    </div>
  );
};

export default WorksheetBuilder;