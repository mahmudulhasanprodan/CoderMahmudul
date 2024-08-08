import React from 'react'

const Location = () => {
  return (
    <>
      <div className="flex items-center justify-center py-10">
        <h2 className="font-FontFamily text-CommonColor text-3xl font-bold underline">
          My Location
        </h2>
      </div>
      <div className="py-10">
        <iframe
          className="w-full h-[550px] pb-20 drop-shadow-lg px-4 lg:px-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14561.335733741358!2d90.419700232497!3d24.160018832554442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375677c23e90f41f%3A0xa7393a4d52db846!2sMahona%20Bhabanipur!5e0!3m2!1sbn!2sbd!4v1723025229723!5m2!1sbn!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Location
