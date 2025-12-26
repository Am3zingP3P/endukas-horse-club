import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Check } from "lucide-react";

const LanguageSwitchAlert = () => {
  const { showLangAlert, closeLangAlert, t } = useLanguage();

  return (
    <AlertDialog open={showLangAlert} onOpenChange={closeLangAlert}>
      <AlertDialogContent className="max-w-md border-primary/20 bg-background/95 backdrop-blur-xl">
        <AlertDialogHeader className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Globe className="w-8 h-8 text-primary animate-pulse-scale" />
          </div>
          <AlertDialogTitle className="font-heading text-2xl text-primary">
            {t('header.lang_switch_title')}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center font-body text-muted-foreground text-base">
            {t('header.lang_switch_desc')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center mt-4">
          <AlertDialogAction 
            onClick={closeLangAlert}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-body font-medium transition-all duration-300 hover:scale-105"
          >
            <Check className="w-4 h-4 mr-2" />
            {t('header.lang_switch_btn')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LanguageSwitchAlert;