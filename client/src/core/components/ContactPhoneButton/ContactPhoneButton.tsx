'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/button";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ContactPhoneButton = ({ phoneNumber }: { phoneNumber: string }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [encodedNumber, setEncodedNumber] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!/^\d{9}$/.test(phoneNumber)) {
      setShow(false);
      return;
    }

    const formattedNumber = formatPhoneNumber(phoneNumber);

    const encoded = encodePhoneNumber(formattedNumber);
    setEncodedNumber(encoded);
    setShow(true);
  }, [phoneNumber]);

  const toggleReveal = () => {
    setIsRevealed((prev) => !prev);
  };

  if (!show || !phoneNumber) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <>
        <div className="relative">
          <Button
            onClick={toggleReveal}
            className="flex items-center bg-[#cc3266]"
            aria-label={
              isRevealed ? 'Ukryj numer telefonu' : 'Pokaż numer telefonu'
            }
          >
            <p className="flex flex-row text-white">
              {isRevealed ? (
                <>
                  <FaEyeSlash
                    className="mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  Ukryj Numer
                </>
              ) : (
                <>
                  <FaEye
                    className="mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  Pokaż Numer
                </>
              )}
            </p>
          </Button>
          <span
            className={`mt-4 cursor-pointer text-lg font-semibold transition-opacity duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'
              }`}
            dangerouslySetInnerHTML={{
              __html: isRevealed ? encodedNumber : '',
            }}
          ></span>
        </div>
      </>
    </div>
  );
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const fullNumber = `+48 ${phoneNumber}`;

  return fullNumber.replace(/(\+48)\s?(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
};

export const encodePhoneNumber = (phoneNumber: string) => {
  return phoneNumber
    .split('')
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join('');
};

export default ContactPhoneButton;
