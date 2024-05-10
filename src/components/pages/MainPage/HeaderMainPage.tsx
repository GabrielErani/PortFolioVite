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
        <AvatarImage src='/1000087130.JPG' alt="Avatar" />
    </Avatar>
    <Label>Gabriel Cirilo Erani</Label>
</div>
<nav className="flex ">
<a href="#SobreMim" ><Button variant="link" className="hidden sm:block">Sobre Mim</Button></a>
<a href="#Contato"><Button variant="link" className="hidden sm:block">Contato</Button></a>
<a href="#Projetos" ><Button variant="link"className="hidden sm:block">Projetos</Button></a>
<a href="#SobreMim" ><Button variant="link" className="hidden sm:block">Home</Button></a>

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
<a href="#SobreMim"><Button variant="link">Sobre Mim</Button></a>
<Separator />
<a href="#Contato"><Button variant="link">Contato</Button></a>
<Separator />
<a href="#Projetos" ><Button variant="link">Projetos</Button></a>
<Separator />
<a href="#SobreMim"><Button variant="link">Home</Button></a>
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

