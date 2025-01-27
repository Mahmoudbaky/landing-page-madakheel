"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FaSnapchat } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-muted">
      <div
        className="flex-between flex-col-reverse md:flex-row min-h-[60vh]  wrapper"
        dir="rtl"
      >
        <div className="flex flex-col w-[50%] gap-7">
          <h1 className="h1-bold">تواصل معنا</h1>
          <p className="text-justify">
            للطلب أو الاستفسار يمكنك التواصل معنا عبر الهاتف أو البريد
            الإلكتروني او عن طريق منصات التواصل الاجتماعي
          </p>
          <div className="flex flex-row gap-4 text-3xl mt-3">
            <FaSnapchat />
            <FaWhatsapp />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
        {/** the form will be here */}
      </div>
    </div>
  );
};

export default ContactInfo;
