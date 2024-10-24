
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Menu from './components/Menu'
import Button from './components/Button'
import Heading from './components/Heading'
import Bannerpic from '../src/assets/Bannerpic.png'
import Point from '../src/assets/Point.png'
import Logo from "../src/assets/Logo.png"
import sweater from "../src/assets/sweater.png"
import jeans from "../src/assets/jeans.png"
import baskets from "../src/assets/baskets.png"
import model from "../src/assets/model.png"
import sellerlady from "../src/assets/sellerlady.png"
import sellerjeans from "../src/assets/sellerjeans.png"
import { IoMdStar } from "react-icons/io"




function App() {


  return (
    <>
    
    {/* Header Part */}
    <div className="bg-menuColor py-5">
     <Container>
      <Flex>
        <div className="w-[10%] pt-2">
          <Image imgSrc={Logo}/>
        </div>
        <div className="w-[60%] pt-4">
         <Flex className={"justify-center gap-x-12 font-pop font-semibold text-2xl"}>
         <Menu menuName={"Men"}/>
          <Menu menuName={"Woman"}/>
          <Menu menuName={"Kids"}/>
          <Menu menuName={"Collection"}/>
          <Menu menuName={"Trends"}/>
         </Flex>
        </div>
        <div className="w-[30%]">
          <Flex>
          <Button btnTex={"Log In"} className={'font-pop font-semibold drop-shadow-xl text-2xl py-[15px] px-[30px] mr-2 border border-btnHover rounded-xl hover:bg-btnHover hover:rounded-xl'}/>
          <Button btnTex={"Sign Up"} className={'font-pop font-semibold drop-shadow-xl text-2xl py-[15px] px-[30px] border border-btnHover rounded-xl hover:bg-btnHover hover:rounded-xl'}/>
          </Flex>
        </div>
      </Flex>
     </Container>
     </div>
    {/* Header Part */}

     {/* Banner Part */}
     <div className="bg-menuColor py-[115px] rounded-xl">
      <Container>
        <Flex>
        <div className='w-[50%]'>
      <Heading as={'h1'} text={'Find The Best Fashion Style For You'}  className={'text-[64px] font-bold pl-[25px] pr-[155px] pb-[38px]'}/>
      <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '}  className={'text-[22px] font-regular pl-[30px] pr-[155px] pb-[75px]'}/>
      <Button btnTex={"SHOP NOW"} className={'bg-black text-white font-pop font-semibold text-2xl py-[25px] px-[90px] rounded-xl ml-[30px]'}/>
     </div>
     <div className='w-[50%]'>
      <Image imgSrc={Bannerpic} className={'ml-[30px]'}/>
      <Image imgSrc={Point} className={'mt-[-230px] ml-[-80px]'}/>
     </div>
        </Flex>
      </Container>
     
     </div>
    {/* Banner Part */}

    {/* Collecftion Part */}
     <div className="py-16 relative">
      <Container>
        <Heading as={"h3"} text={'New Collection'} className={'font-frank font-bold text-[64px] text-center pt-[230px] pb-[130px]'}/>
        <Flex className={'justify-between'}>
          <div className="w-[350px] rounded-xl">
           <Image imgSrc={sweater}/>
           <Button btnTex={'Sweater'} className={'bg-white rounded-xl py-2 ml-44 px-24 absolute bottom-28 -translate-x-1/2'}/>
          </div>
          <div className="w-[356px] rounded-xl">
           <Image imgSrc={jeans}/>
           <Button btnTex={'Jeans'} className={'bg-white rounded-xl py-2 ml-44 px-32 absolute bottom-28 -translate-x-1/2'}/>
          </div>
          <div className="w-[397px] rounded-xl">
           <Image imgSrc={baskets}/>
           <Button btnTex={'Baskets'} className={'bg-white rounded-xl py-2 ml-48 px-32 absolute bottom-28 -translate-x-1/2'}/>
          </div>
        </Flex>
      </Container>
     </div>
    {/* Collecftion Part */}

    {/* Counter Part */}
    <div className="bg-white pt-[130px] pb-[200px] relative">
      <Container>
        <Flex>
          <div className="w-1/2 z-10">
           <Image imgSrc={model}/>
          </div>
          <div className="w-1/2 pl-24">
          <Heading as={'h1'} text={'Best Fashion Since 2010'}  className={'font-frank font-bold text-[64px] px-20 pt-[70px] pb-[85px]'}/>
          <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '}  className={'font-pop text-[24px] px-20'}/>
          </div>
        </Flex>
        <div className="bg-counterColor p-16 w-[810px] rounded-xl text-center right-[280px] absolute bottom-[14px]">
          <Flex>
            <div className="w-1/3 border-r-2 border-black mr-2">
               <Heading as={'h3'} text={'2010'} className={'font-pod font-bold text-[64px]'}/>
               <Heading as={'h4'} text={'Founded'} className={'font-pop font-medium text-[28px]'}/>
          </div>
          <div className="w-1/3 border-r-2 border-black mr-2">
               <Heading as={'h3'} text={'5000+'} className={'font-pod font-bold text-[64px]'}/>
               <Heading as={'h4'} text={'Product Sold'} className={'font-pop font-medium text-[28px]'}/>
          </div>
          <div className="w-1/3">
               <Heading as={'h3'} text={'4500+'} className={'font-pod font-bold text-[64px]'}/>
               <Heading as={'h4'} text={'Best Reviews'} className={'font-pop font-medium text-[28px]'}/>
          </div>
          </Flex>
        </div>
      </Container>
    </div>
    {/* Counter Part */}

    {/* Seller Part */}
    <div className="bg-sellerColor py-40">
      <Container>
        <Flex>
          <div className="w-[460px]">
            <Heading as={'h3'} text={'Best Seller Product'} className={'text-white font-frank font-bold text-[64px] pb-10'}/>
            <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'} className={'text-white pb-10 font-frank font-bold text-[24px]'}/>
            <Button btnTex={"Learn MORE"} className={'bg-black text-white font-pop font-semibold text-2xl py-[25px] px-[90px] rounded-xl ml-[5px]'}/>
          </div>
          <div className="w-[370px mr-[40px]">
            <Image imgSrc={sellerlady}/>
            <div className="bg-white py-6 w-[366px]">
            <Flex className={'ml-3'}>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            </Flex>
            <Heading as={'h4'} text={'Sweater Shirt'} className={'font-pop font-semibold text-[22px] ml-3'}/>
            <div className="w-[200px]">
              <Flex className={'justify-between ml-3'}>
              <Heading as={'h5'} text={'$45.99'} className={'font-pop font-regular text-[24px] text-dlrColor'}/>
              <Heading as={'h5'} text={'$45.99'} className={'font-pop font-regular text-[24px] text-black'}/>
              </Flex>
            </div>
            </div>
          </div>
          <div className="w-[370px]">
            <Image imgSrc={sellerjeans}/>
            <div className="bg-white py-6 w-[366px]">
            <Flex className={'ml-3'}>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            <IoMdStar className='text-starColor text-2xl'/>
            </Flex>
            <Heading as={'h4'} text={'Pants fashion'} className={'font-pop font-semibold text-[22px] ml-3'}/>
            <div className="w-[200px]">
              <Flex className={'justify-between ml-3'}>
              <Heading as={'h5'} text={'$55'} className={'font-pop font-regular text-[24px] text-dlrColor'}/>
              <Heading as={'h5'} text={'$44.99'} className={'font-pop font-regular text-[24px] text-black'}/>
              </Flex>
            </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
    {/* Seller Part */}
    </>
  )
}

export default App
