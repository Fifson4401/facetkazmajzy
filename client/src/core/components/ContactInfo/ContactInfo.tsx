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
    <div className="flex flex-col w-full lg:p-11 lg:flex-row rounded-3xl justify-evenly relative items-center">
      <div className="order-1 mt-8 lg:ml-6 gap-2 lg:gap-4 flex w-full flex-col items-start lg:order-2 lg:w-1/2 mb-14 max-lg:mb-5 max-lg:mt-0">
        {contactItem.map((item, index) => {
          return (
            <div key={`ContacItem_${index}`}>
              <p className="text-m md:text-xl text-left font-semibold">{item.title}</p>
              {item.type === 'phone' ? <ContactPhoneButton phoneNumber={item.description} /> :
                <p className="mb-3 lg:mb-12 text-m md:text-xl text-left">{item.description}</p>
              }
            </div>
          )
        })}

      </div>
      <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:w-3/5">
        <iframe className='w-full' src={mapUrl} width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <p className='invisible lg:visible absolute text-4xl text-[#cc3266] font-semibold bottom-10 right-4 z-10' aria-hidden>Siemianowice Śląskie</p>
    </div>
  );
};



export default ContactInfo;
