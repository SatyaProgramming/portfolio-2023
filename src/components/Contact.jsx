import React from "react";

import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
        >
            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZVuppercase mb-2 text-[#111111]">
                    CLIENT SAYS
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
                    "Welcome to my virtual office! I'm thrilled that you're here. If you have a project in mind or would like to collaborate, I would love to hear from you. Please fill out the contact form below with your project details, and I'll get back to you shortly. Let's bring your ideas to life together!"
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                <Form />
            </Wrapper>
        </div>
    );
};

export default Contact;