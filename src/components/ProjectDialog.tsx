import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ProjectDialogProps {
  selectedProject: any;
  setSelectedProject: (project: any) => void;
  imageIndex: number;
  setImageIndex: (index: number) => void;
  projectImages: string[];
}

export default function ProjectDialog({ 
  selectedProject, 
  setSelectedProject, 
  imageIndex, 
  setImageIndex, 
  projectImages 
}: ProjectDialogProps) {
  return (
    <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
      <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-md border-primary/30">
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform z-50 shadow-lg shadow-primary/30"
        >
          <Icon name="X" size={24} />
        </button>
        
        {selectedProject && (
          <>
            <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
              <img
                src={projectImages[imageIndex]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={() => setImageIndex((imageIndex - 1 + projectImages.length) % projectImages.length)}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/30"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                <div className="flex gap-2">
                  {projectImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === imageIndex ? 'bg-primary w-8 shadow-lg shadow-primary/30' : 'bg-white/30'
                      }`}
                    ></div>
                  ))}
                </div>
                <button
                  onClick={() => setImageIndex((imageIndex + 1) % projectImages.length)}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/30"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-primary">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            
            <p className="text-muted-foreground">
              {selectedProject.desc} This project showcases advanced level design techniques, optimized lighting systems, and careful attention to environmental storytelling. Built with Source Engine's Hammer Editor, it demonstrates professional-grade map creation for competitive and roleplay servers.
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
