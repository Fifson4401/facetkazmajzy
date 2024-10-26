import { ContactItemAttribute } from '@/api/interfaces/contact';
import { FC } from 'react';
import ContactPhoneButton from '../ContactPhoneButton/ContactPhoneButton';

interface ContactInfoProps {
  mapUrl?: string;
  contactItem?: ContactItemAttribute[];
}

const ContactInfo: FC<ContactInfoProps> = ({ contactItem, mapUrl }) => {
  if (!contactItem?.length || !mapUrl) {
    return null;
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-evenly rounded-3xl lg:flex-row lg:p-11">
      <div className="order-1 mb-14 mt-8 flex w-full flex-col items-start gap-2 max-lg:mb-5 max-lg:mt-0 lg:order-2 lg:ml-6 lg:w-1/2 lg:gap-4">
        {contactItem.map((item, index) => {
          return (
            <div key={`ContacItem_${index}`}>
              <p className="text-m text-left font-semibold md:text-xl">
                {item.title}
              </p>
              {item.type === 'phone' ? (
                <ContactPhoneButton phoneNumber={item.description} />
              ) : (
                <p className="text-m mb-3 text-left md:text-xl lg:mb-12">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:w-3/5">
        <iframe
          className="w-full"
          src={mapUrl}
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='Facetka z Majzy na mapie'
        />
      </div>
      <p
        className="invisible absolute bottom-10 right-4 z-10 text-4xl font-semibold text-[#cc3266] lg:visible"
        aria-hidden
      >
        Siemianowice Śląskie
      </p>
    </div>
  );
};

export default ContactInfo;
