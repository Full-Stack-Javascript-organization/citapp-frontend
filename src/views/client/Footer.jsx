import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const footerData = {
	"socialmedia" : { "instagram":"https://www.instagram.com/teepees.cl/", "facebook":"", "twitter":"", },
	"contacts" : { "email":"soporte@teepees.cl", "phone":"+56 123 4567 890", "whatsapp":"+56 123 4567 890","address" : "" }
}


let liContacts = [];
if(footerData.contacts.email !== "")
{
  liContacts.push(<li className='py-1'>Email :  {footerData.contacts['email']}</li>);
}

if(footerData.contacts.phone !== "")
{
  liContacts.push(<li className='py-1'>Phone :  {footerData.contacts['phone']}</li>);
}

if(footerData.contacts.whatsapp !== "")
{
  liContacts.push(<li className='py-1'>Whatsapp :  {footerData.contacts['whatsapp']}</li>);
}

if(footerData.contacts.address !== "")
{
  liContacts.push(<li className='py-1'>Address :  {footerData.contacts['address']}</li>);
}

export function Footer(){
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>Contacts</h6>
          <ul>
            {liContacts}
          </ul>
        </div>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <a href={footerData.socialmedia.facebook} target='_blank'><FaFacebook /></a>
          <a href={footerData.socialmedia.instagram} target='_blank'><FaInstagram /></a>
          <a href={footerData.socialmedia.twitter} target='_blank'><FaTwitter /></a>
          <a href={footerData.socialmedia.facebook} target='_blank'><TiSocialPinterest size={30} /></a>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Csis3380 Group 5. All rights reserved</p>
      </div>
    </div>
  );
};

