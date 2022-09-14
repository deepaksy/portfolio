import Toast from '../test/Toast'
import AccordionBanner from '../test/Accordion'
import TAB from '../test/TAB'
import ProgressBar from '../test/Progress'
import Pop from '../test/Pop'

const Test = () => {
  return (
    <div>
        <AccordionBanner title='Who am I?' content={'I am a computer science engineer'}/>
        <TAB/>
        <Toast/>
        <ProgressBar/>
        <Pop/>
    </div>
  )
}

export default Test