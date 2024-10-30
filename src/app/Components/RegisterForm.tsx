import React from "react";
import * as Form from "@radix-ui/react-form";
import { Heading } from "@radix-ui/themes";

const FormDemo = () => (
	<Form.Root className="w-[260px]">
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
                    <Form.Control asChild>
                        <input
                            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                            type="name"
                            required
                            />
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
                    <Form.Control asChild>
                        <input
                            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                            type="name"
                            required
                            />
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
                <Form.Control asChild>
                    <input
                        className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                        type="address"
                        required
                        />
                </Form.Control>
            </div>
		</Form.Field>		
		<Form.Submit asChild>
			<button className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
				Register
			</button>
		</Form.Submit>
	</Form.Root>
);

export default FormDemo;
