import { useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddBlog = () => {
    // const editor = useRef(null);
    // const [content, setContent] = useState('');
    const [value, setValue] = useState('');
    // const config = {
    //     height: 500
    // };

    const handleBlog = (e) => {
        e.preventDefault()
        const form = e.target;
        const url = form.photo.value;
        const newBlog = {content: value, imageUrl: url};
        console.log(newBlog)
        fetch('https://portfolio-server-mocha-two.vercel.app/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBlog)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data sent successfully:', data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-7">Add New Blog</h1>
            <form className='w-full' onSubmit={handleBlog}>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
              <input  className='mt-6 p-2 w-full m-2 border border-[rgb(232,139,46)] rounded-xl text-xl' required type="text" placeholder='Image URl' name='photo' />
            <input className='bg-[#e88b2e] text-3xl mt-4 py-2 rounded-2xl w-full text-white font-semibold' type="submit" value="submit" />
            </form>
            {/* <div>
                <JoditEditor
                    className='min-h-96'
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => setContent(newContent)}
                />
                <div className='mt-10 w-full'>
                    <button
                        onClick={handleBlog}
                        className='bg-[#e88b2e] w-full py-2 text-4xl text-white font-semibold rounded-xl'
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </div> */}
            <div>
                {/* {content} */}
            </div>
        </div>
    );
};

export default AddBlog;
