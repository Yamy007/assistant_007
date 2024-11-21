import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';


export const NotebookPage = () => {
    
      const Textarea =  styled(BaseTextareaAutosize)(
        () => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: #FFF;
        background: rgba(255,255,255,0.4);
        // border: 1px solid  #9B5277;
        // box-shadow: 0px 2px 2px #000;
    
        &:hover {
          border-color: #9B5277;
        }
    
        &:focus {
          border-color: #9B5277;
          box-shadow: 0 0 0 2px #9B5277;
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
    
    return (
        <div className="p-4">
            <div className='   w-full min-h-60 h-fit  rounded-2xl shadow-2xl'>
                <Textarea aria-label="minimum height" minRows={1} placeholder="Title" />
                <Textarea aria-label="minimum height" minRows={15} placeholder="Text Notes" />

            </div>
        </div>
    )
}