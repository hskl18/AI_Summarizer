import {logo} from '../assets';

//unknow bug for css is not applied on mac
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            
            <img src={logo} alt="sumz_logo" 
            className= 'w-16 object-contain '
            />

            <button
            className='black_btn'
            onClick={() => window.open('https://github.com/hanbintan2003/')}
            >
                Github
            </button>
        </nav>
        
        <h1 className='head_text '>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero