import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import FormDemo from "./RegisterForm";
import { Heading, Text } from "@radix-ui/themes";

const RootNavbar = () => {

    return (
        <NavigationMenu.Root className="flex justify-center border border-red-500">
            <NavigationMenu.List className="flex gap-x-4 p-1">
                <NavigationMenu.Item className="position: relative">
                    <NavigationMenu.Trigger className="rounded">
                        About Us
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="position: absolute w-[200px] top-full py-5 rounded">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="position: relative">
                    <NavigationMenu.Trigger className="rounded">
                        Register
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="position: absolute top-full py-5 rounded">
                        <Heading style={{ fontSize: "20px"}}>PARENT CONTACT INFORMATION</Heading>
                        <FormDemo></FormDemo>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="position: relative">
                    <NavigationMenu.Trigger className="rounded">
                        Sign In
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="position: absolute top-full py-5 rounded">
                        Here is the Login
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )

}

export default RootNavbar