import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignUpModal = ({ open, onOpenChange }: SignUpModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Get Started for Free</DialogTitle>
        <DialogDescription>Create your account and start your learning journey.</DialogDescription>
      </DialogHeader>
      <form
        className="space-y-4 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          onOpenChange(false);
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Create a password" />
        </div>
        <Button type="submit" variant="cta" className="w-full">
          Sign Up
        </Button>
      </form>
    </DialogContent>
  </Dialog>
);

export default SignUpModal;
