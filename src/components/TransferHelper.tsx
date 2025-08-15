import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Copy, Download, FileText, Folder } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TransferHelper = () => {
  const [copiedFiles, setCopiedFiles] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const copyToClipboard = async (content: string, filename: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedFiles(prev => new Set([...prev, filename]));
      toast({
        title: "Copied!",
        description: `${filename} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const projectFiles = [
    {
      name: "package.json dependencies",
      path: "dependencies",
      essential: true,
      content: `"dependencies": {
  "@hookform/resolvers": "^3.9.0",
  "@radix-ui/react-accordion": "^1.2.0",
  "@radix-ui/react-alert-dialog": "^1.1.1",
  "@radix-ui/react-aspect-ratio": "^1.1.0",
  "@radix-ui/react-avatar": "^1.1.0",
  "@radix-ui/react-checkbox": "^1.1.1",
  "@radix-ui/react-collapsible": "^1.1.0",
  "@radix-ui/react-context-menu": "^2.2.1",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-dropdown-menu": "^2.1.1",
  "@radix-ui/react-hover-card": "^1.1.1",
  "@radix-ui/react-label": "^2.1.0",
  "@radix-ui/react-menubar": "^1.1.1",
  "@radix-ui/react-navigation-menu": "^1.2.0",
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-progress": "^1.1.0",
  "@radix-ui/react-radio-group": "^1.2.0",
  "@radix-ui/react-scroll-area": "^1.1.0",
  "@radix-ui/react-select": "^2.1.1",
  "@radix-ui/react-separator": "^1.1.0",
  "@radix-ui/react-slider": "^1.2.0",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-switch": "^1.1.0",
  "@radix-ui/react-tabs": "^1.1.0",
  "@radix-ui/react-toast": "^1.2.1",
  "@radix-ui/react-toggle": "^1.1.0",
  "@radix-ui/react-toggle-group": "^1.1.0",
  "@radix-ui/react-tooltip": "^1.1.4",
  "@tanstack/react-query": "^5.56.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "^1.0.0",
  "date-fns": "^3.6.0",
  "embla-carousel-react": "^8.3.0",
  "input-otp": "^1.2.4",
  "lucide-react": "^0.462.0",
  "next-themes": "^0.3.0",
  "react": "^18.3.1",
  "react-day-picker": "^8.10.1",
  "react-dom": "^18.3.1",
  "react-hook-form": "^7.53.0",
  "react-resizable-panels": "^2.1.3",
  "react-router-dom": "^6.26.2",
  "recharts": "^2.12.7",
  "sonner": "^1.5.0",
  "tailwind-merge": "^2.5.2",
  "tailwindcss-animate": "^1.0.7",
  "vaul": "^0.9.3",
  "zod": "^3.23.8"
}`,
    },
    {
      name: "src/App.tsx",
      path: "src/App.tsx",
      essential: true,
      folder: "src",
    },
    {
      name: "src/main.tsx",
      path: "src/main.tsx",
      essential: true,
      folder: "src",
    },
    {
      name: "src/index.css",
      path: "src/index.css",
      essential: true,
      folder: "src",
    },
    {
      name: "tailwind.config.ts",
      path: "tailwind.config.ts",
      essential: true,
      folder: "root",
    },
    {
      name: "Pages",
      path: "src/pages",
      essential: true,
      folder: "src/pages",
      isFolder: true,
      files: [
        "Index.tsx",
        "OnboardingPage.tsx",
        "DashboardPage.tsx",
        "NotFound.tsx"
      ]
    },
    {
      name: "Components",
      path: "src/components",
      essential: true,
      folder: "src/components",
      isFolder: true,
      files: [
        "HomePage.tsx",
        "OnboardingFlow.tsx",
        "AppDashboard.tsx",
        "InteractiveCanvas.tsx",
        "WorksheetBuilder.tsx"
      ]
    },
    {
      name: "UI Components",
      path: "src/components/ui",
      essential: true,
      folder: "src/components/ui",
      isFolder: true,
      files: [
        "button.tsx", "card.tsx", "input.tsx", "dialog.tsx", "tabs.tsx",
        "accordion.tsx", "alert.tsx", "badge.tsx", "checkbox.tsx", "form.tsx",
        "label.tsx", "select.tsx", "separator.tsx", "table.tsx", "toast.tsx",
        "tooltip.tsx", "progress.tsx", "sidebar.tsx", "sheet.tsx", "dropdown-menu.tsx"
      ]
    },
    {
      name: "Data Files",
      path: "src/data",
      essential: true,
      folder: "src/data",
      isFolder: true,
      files: [
        "curriculum.ts",
        "comprehensive-curriculum.ts",
        "worksheets.ts"
      ]
    },
    {
      name: "Utilities",
      path: "src/lib",
      essential: true,
      folder: "src/lib",
      isFolder: true,
      files: [
        "utils.ts"
      ]
    },
    {
      name: "Hooks",
      path: "src/hooks",
      essential: true,
      folder: "src/hooks",
      isFolder: true,
      files: [
        "use-toast.ts",
        "use-mobile.tsx"
      ]
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Create New Lovable Project",
      description: "Go to lovable.dev and create a new React project with Scotticainc@gmail.com account"
    },
    {
      step: 2,
      title: "Copy Dependencies",
      description: "First, copy the dependencies list and add them using Lovable's 'Add Package' feature"
    },
    {
      step: 3,
      title: "Copy Core Files",
      description: "Copy the main configuration and entry files (tailwind.config.ts, src/index.css, src/App.tsx, src/main.tsx)"
    },
    {
      step: 4,
      title: "Create Folder Structure",
      description: "Create the necessary folders: src/pages, src/components, src/components/ui, src/data, src/lib, src/hooks"
    },
    {
      step: 5,
      title: "Copy All Files",
      description: "Copy each file from the file list below into the corresponding folder in your new project"
    },
    {
      step: 6,
      title: "Test the Project",
      description: "Check that everything works by viewing the preview"
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Project Transfer Helper
          </CardTitle>
          <CardDescription>
            Easy step-by-step guide to transfer your project to a new Lovable account
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="instructions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="instructions">📋 Instructions</TabsTrigger>
          <TabsTrigger value="files">📁 Files to Copy</TabsTrigger>
          <TabsTrigger value="checklist">✅ Checklist</TabsTrigger>
        </TabsList>

        <TabsContent value="instructions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Step-by-Step Transfer Guide</CardTitle>
              <CardDescription>
                Follow these steps in order to transfer your project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {steps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <div className="grid gap-4">
            {projectFiles.map((file) => (
              <Card key={file.path}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {file.isFolder ? <Folder className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      <CardTitle className="text-base">{file.name}</CardTitle>
                      {file.essential && <Badge variant="secondary">Essential</Badge>}
                    </div>
                    {file.content && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(file.content!, file.name)}
                        className="flex items-center gap-2"
                      >
                        {copiedFiles.has(file.name) ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        {copiedFiles.has(file.name) ? 'Copied' : 'Copy'}
                      </Button>
                    )}
                  </div>
                  <CardDescription>
                    Path: <code className="text-xs bg-muted px-1 py-0.5 rounded">{file.path}</code>
                  </CardDescription>
                </CardHeader>
                {file.isFolder && file.files && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-2">Files in this folder:</p>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      {file.files.map((filename) => (
                        <div key={filename} className="text-muted-foreground">• {filename}</div>
                      ))}
                    </div>
                  </CardContent>
                )}
                {file.content && (
                  <CardContent className="pt-0">
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto max-h-32">
                      {file.content.slice(0, 200)}...
                    </pre>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Checklist</CardTitle>
              <CardDescription>
                Check off each item as you complete it
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Created new Lovable project with Scotticainc@gmail.com",
                  "Copied and installed all dependencies",
                  "Copied src/App.tsx",
                  "Copied src/main.tsx", 
                  "Copied src/index.css",
                  "Copied tailwind.config.ts",
                  "Created src/pages folder and copied all page files",
                  "Created src/components folder and copied all component files",
                  "Created src/components/ui folder and copied all UI components",
                  "Created src/data folder and copied all data files",
                  "Created src/lib folder and copied utils.ts",
                  "Created src/hooks folder and copied hook files",
                  "Tested the project in preview",
                  "Verified all functionality works"
                ].map((task, index) => (
                  <label key={index} className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{task}</span>
                  </label>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">💡 Pro Tips:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Copy files one at a time to avoid mistakes</li>
                  <li>• Use Lovable's file manager to create folders</li>
                  <li>• Check the preview after each major section</li>
                  <li>• If something breaks, double-check file names and paths</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransferHelper;