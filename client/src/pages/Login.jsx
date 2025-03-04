import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function Login() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginInput({
        ...loginInput,
        [name]: value,
      });
    } else {
      setSignupInput({
        ...signupInput,
        [name]: value,
      });
    }
  };

  const handleRegistration = (type) => {
    const inputData = type === "login" ? loginInput : signupInput;
    console.log(inputData);
    
  };

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => changeInputHandler(e, "login")}
                name="email"
                value={loginInput.email}
                type="email"
                required={true}
                id="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => changeInputHandler(e, "login")}
                name="password"
                value={loginInput.password}
                required={true}
                id="password"
                type="password"
                placeholder="*******"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                handleRegistration("login");
              }}
              className="w-full cursor-pointer"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={(e) => changeInputHandler(e, "signup")}
                name="name"
                value={signupInput.name}
                type="text"
                id="name"
                placeholder="John Doe 🚀"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => changeInputHandler(e, "signup")}
                name="email"
                value={signupInput.email}
                required={true}
                id="email"
                type="email"
                placeholder="john.doe@me.com"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => changeInputHandler(e, "signup")}
                name="password"
                value={signupInput.password}
                required={true}
                id="password"
                type="password"
                placeholder="*******"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button  onClick={() => {
                handleRegistration("signup");
              }} className="w-full cursor-pointer">Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
