import React, { useState } from 'react'
import SecNavbar from '../components/SecNavbar'
import Navbar from '../components/Navbar'
import { Accordion } from '@mantine/core'


const Faq = () => {
    // const [open,setOpen] = useState(false);

    // const toggleAccordion = () => {
    //   setOpen(!open);
    // };

  return (
    <>
      <Navbar/>
      <SecNavbar/>
    <div className="container">
      <div className="tw-mt-28 tw-mb-10">
        <h6 className='tw-text-3xl tw-font-semibold col-lg-12 text-center'>Frequently Asked Questions</h6>
        <h1 className='tw-ml-[200px] tw-mt-12 tw-text-2xl tw-font-semibold'>Orders:</h1>
      </div>
  <div className="container tw-w-[69.5%]"> 
  
      <Accordion className='tw-cursor-pointer'>
  <Accordion.Item value="customization">
        <Accordion.Control className='tw-text-[1.125rem]'>
          1. Bring of had which their whose you're it own?
          </Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>
        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.        </Accordion.Panel>
      </Accordion.Item>


      <Accordion.Item value="flexibility">
        <Accordion.Control className='tw-text-[1.125rem]'>2. Over shall air can't subdue fly divide him?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control className='tw-text-[1.125rem]'>3. Waters one you'll creeping?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="fowl">
        <Accordion.Control className='tw-text-[1.125rem]'>4. Fowl, given morning seed fruitful kind beast be?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>
      </Accordion>
      <h1 className='tw-my-6 tw-text-2xl tw-font-semibold tw-ml-[20px]'>Shipping & Returns:</h1>

      <Accordion className='tw-cursor-pointer'>
         <Accordion.Item value="customization">
         <Accordion.Control className='tw-text-[1.125rem]'>
          1. Bring of had which their whose you're it own?
          </Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>
        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.        </Accordion.Panel>
      </Accordion.Item>


      <Accordion.Item value="flexibility">
        <Accordion.Control className='tw-text-[1.125rem]'>2. Over shall air can't subdue fly divide him?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control className='tw-text-[1.125rem]'>3. Waters one you'll creeping?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="fowl">
        <Accordion.Control className='tw-text-[1.125rem]'>4. Fowl, given morning seed fruitful kind beast be?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="land">
        <Accordion.Control className='tw-text-[1.125rem]'>5. Land had man doesn't the very a doesn't?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      </Accordion>
      <h1 className='tw-my-6 tw-text-2xl tw-font-semibold tw-ml-[20px]'>Payment:</h1>

      <Accordion className='tw-cursor-pointer'>
         <Accordion.Item value="customization">
         <Accordion.Control className='tw-text-[1.125rem]'>
          1. Bring of had which their whose you're it own?
          </Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>
        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.        </Accordion.Panel>
      </Accordion.Item>


      <Accordion.Item value="flexibility">
        <Accordion.Control className='tw-text-[1.125rem]'>2. Over shall air can't subdue fly divide him?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control className='tw-text-[1.125rem]'>3. Waters one you'll creeping?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="fowl">
        <Accordion.Control className='tw-text-[1.125rem]'>4. Fowl, given morning seed fruitful kind beast be?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="land">
        <Accordion.Control className='tw-text-[1.125rem]'>5. Land had man doesn't the very a doesn't?</Accordion.Control>
        <Accordion.Panel className='tw-text-[#525252]'>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass.</Accordion.Panel>
      </Accordion.Item>

      </Accordion>
  </div> 
  
   
    </div>
    </>
  )
}

export default Faq