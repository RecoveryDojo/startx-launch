import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Save, Download, RefreshCw } from 'lucide-react';

interface CanvasField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface CanvasSection {
  id: string;
  title: string;
  fields: CanvasField[];
  color: string;
}

interface InteractiveCanvasProps {
  title: string;
  description: string;
  sections: CanvasSection[];
  onSave?: (data: Record<string, string>) => void;
  savedData?: Record<string, string>;
}

const InteractiveCanvas: React.FC<InteractiveCanvasProps> = ({
  title,
  description,
  sections,
  onSave,
  savedData = {}
}) => {
  const [formData, setFormData] = useState<Record<string, string>>(savedData);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const updateField = (fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSave = () => {
    onSave?.(formData);
    setLastSaved(new Date());
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const completionPercentage = Math.round(
    (Object.values(formData).filter(value => value.trim() !== '').length / 
     sections.reduce((total, section) => total + section.fields.length, 0)) * 100
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">
            {completionPercentage}% Complete
          </Badge>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      {/* Canvas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <Card key={section.id} className="h-fit">
            <CardHeader className={`${section.color} text-white rounded-t-lg`}>
              <CardTitle className="text-lg">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {section.fields.map((field) => (
                <div key={field.id} className="space-y-1">
                  <label className="text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <Textarea
                      placeholder={field.placeholder}
                      value={formData[field.id] || ''}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      className="min-h-[80px] resize-none"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      value={formData[field.id] || ''}
                      onChange={(e) => updateField(field.id, e.target.value)}
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      value={formData[field.id] || ''}
                      onChange={(e) => updateField(field.id, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Auto-save indicator */}
      {lastSaved && (
        <div className="text-xs text-muted-foreground text-center">
          Last saved: {lastSaved.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

export default InteractiveCanvas;