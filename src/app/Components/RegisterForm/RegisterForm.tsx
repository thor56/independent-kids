"use client"

import React from "react";
import * as Form from "@radix-ui/react-form";
import { Heading, TextField } from "@radix-ui/themes";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FormDemo = () => {
    
    const [numOfChildren, setNumOfChildren] = React.useState<number>(0);

    return (
        <Form.Root className="w-[260px]">
            <Heading style={{ fontSize: "20px"}}>PARENT CONTACT INFORMATION</Heading>
            <Form.Field className="mb-2.5 grid" name="parent_name">
                <div className="grid grid-cols-2 gap-4 items-baseline justify-between">
                    <div className="flex flex-col">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                            First Name
                        </Form.Label>
                        <Form.Message
                            className="text-[13px] text-white opacity-80"
                            match="valueMissing"
                        >
                            Please enter a name
                        </Form.Message>
                        <Form.Control asChild style={{ backgroundColor: "white" }}>
                            <TextField.Root placeholder="Enter a Name">
                                
                            </TextField.Root>
                        </Form.Control>
                    </div>
                    <div className="flex flex-col">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                            Last Name
                        </Form.Label>
                        <Form.Message
                            className="text-[13px] text-white opacity-80"
                            match="valueMissing"
                        >
                            Please enter a name
                        </Form.Message>
                        <Form.Control asChild style={{ backgroundColor: "white" }}>
                            <TextField.Root placeholder="Enter a Name">
                                
                            </TextField.Root>
                        </Form.Control>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        Address
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80"
                        match="valueMissing"
                    >
                        Please enter an address
                    </Form.Message>
                    <Form.Control asChild style={{ backgroundColor: "white" }}>
                        <TextField.Root placeholder="Enter an Address">
                            
                        </TextField.Root>
                    </Form.Control>
                </div>
                <div className="grid grid-cols-1">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        Number of Children
                    </Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-80" match="valueMissing">
                        Please enter an amount
                    </Form.Message>
                    <Form.Control asChild style={{ backgroundColor: "white", color: "black" }}>
                        <TextField.Root                             
                            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px]"                            
                            type="number"     
                            variant="soft"                        
                            required                             
                            onChange={(e) => setNumOfChildren(Number(e.target.value))}>                        
                        </TextField.Root>                        
                    </Form.Control>                
                </div>
                {numOfChildren != 0 && <Heading style={{fontSize: "20px", margin: 3}}>CHILDREN INFORMATION</Heading>}
                {Array.from({ length: numOfChildren }).map((_, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-1">
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                Full Name
                            </Form.Label>
                            <Form.Message className="text-[13px] text-white opacity-80" match="valueMissing">
                                Please enter a name
                            </Form.Message>
                            <Form.Control asChild style={{ backgroundColor: "white" }}>
                                <TextField.Root placeholder="Enter a grade">
                                    
                                </TextField.Root>
                            </Form.Control>     
                        </div>
                        <div className="grid grid-cols-1">
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                Gender
                            </Form.Label>
                            <Form.Message className="text-[13px] text-white opacity-80" match="valueMissing">
                                Please select a choice
                            </Form.Message>
                            <Form.Control asChild style={{ backgroundColor: "white" }}>
                                <Select.Root>
                                    <Select.Trigger className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-between rounded px-2.5 text-[15px] bg-white leading-none text-black">
                                        <Select.Value placeholder="Choose an option" />
                                        <Select.Icon className="text-violet11">
                                            <ChevronDownIcon />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content
                                            className="overflow-hidden rounded-md bg-white text-black shadow-lg"
                                            position="popper"
                                            sideOffset={5}
                                        >
                                            <Select.Viewport className="p-[5px]">
                                                <Select.Group>
                                                    <Select.Item value="male">Male</Select.Item>
                                                    <Select.Item value="female">Female</Select.Item>
                                                    <Select.Item value="other_gender">Other</Select.Item>
                                                    <Select.Item value="no_gender">Prefer Not To Say</Select.Item>
                                                </Select.Group>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </Form.Control>    
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <Form.Label>
                                    Age
                                </Form.Label>
                                <Form.Message
                                    className="text-[13px] text-white opacity-80"
                                    match="valueMissing"
                                >
                                    Please Select an Age
                                </Form.Message>
                                <Form.Control asChild style={{ backgroundColor: "white" }}>
                                    <TextField.Root placeholder="Enter an Age">                                    
                                    </TextField.Root>
                                </Form.Control>
                            </div>
                            <div className="flex flex-col">
                                <Form.Label>
                                    Grade
                                </Form.Label>
                                <Form.Message
                                    className="text-[13px] text-white opacity-80"
                                    match="valueMissing"
                                >
                                    Please Enter a Grade
                                </Form.Message>
                                <Form.Control asChild style={{ backgroundColor: "white" }}>
                                    <TextField.Root placeholder="Enter a Grade">                                    
                                    </TextField.Root>
                                </Form.Control>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <Form.Label>
                                School or Daycare Location
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Please enter a location
                            </Form.Message>
                            <Form.Control asChild style={{ backgroundColor: "white" }}>
                                <TextField.Root placeholder="Enter a Location">                                    
                                </TextField.Root>
                            </Form.Control>
                        </div>
                    </div>
                ))}
            </Form.Field>		
            <Form.Submit asChild>
                <button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    Register
                </button>
            </Form.Submit>
        </Form.Root>

    );
};

export default FormDemo;
