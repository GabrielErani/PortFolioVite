import { ModeToggle } from "@/components/ui/mode-toggle";
import "./MainPage.css";
import { Label } from "@/components/ui/label";
import { Avatar,  AvatarImage } from "@/components/ui/avatar";
import { AlignJustify } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
  const HeaderMainPage = () => {
    return (
       <>
       <header className=" p-4 h-fit flex justify-between">

<div className="flex items-center gap-4 self-start">
    <Avatar>
        <AvatarImage src="src\assets\1000087130.JPG" />
    </Avatar>
    <Label>Gabriel Cirilo Erani</Label>
</div>
<nav className="flex ">
<Button variant="link" className="hidden sm:block">Sobre Mim</Button>
<Button variant="link" className="hidden sm:block">Contato</Button>
<Button variant="link"className="hidden sm:block">Projetos</Button>
<Button variant="link"className="hidden sm:block">Home</Button>

<ModeToggle />
<Sheet>
    <SheetTrigger asChild>
        <Button variant="link" className="sm:hidden"><AlignJustify /></Button>
    </SheetTrigger>

<SheetContent>
<SheetHeader>
<SheetTitle className="mb-12">Dê uma olhada!</SheetTitle>
</SheetHeader>
<Separator />
<Button variant="link">Sobre Mim</Button>
<Separator />
<Button variant="link">Contato</Button>
<Separator />
<Button variant="link">Projetos</Button>
<Separator />
<Button variant="link">Home</Button>
<Separator />
</SheetContent>
</Sheet>
</nav>
</header>
<Separator />
       </>
    );
};

export default HeaderMainPage;

