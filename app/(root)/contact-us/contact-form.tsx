const ContactForm = () => {
  return (
    <div className="flex items-center justify-center  md:pl-0">
      <div className="mx-auto w-full max-w-[550px] bg-muted">
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-black"
            >
              الاسم
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="الاسم"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-muted focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-black"
            >
              رقم الهاتف
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="رقم الهاتف"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-muted focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-black"
            >
              البريد الالكتروني
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="البريد الالكتروني"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-muted focus:shadow-md"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-black"
            >
              تفاصيل الطلب
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="تفاصيل الطلب"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-muted focus:shadow-md"
            />
          </div>
          <div>
            <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none mt-3">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
