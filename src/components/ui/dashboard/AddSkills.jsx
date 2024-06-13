
const AddSkills = () => {
  const handleSkill = (e) => {
    e.preventDefault()
    const form = e.target;
    const url = form.photo.value;
    const name = form.name.value;
    const newSkill = { image: url, name};
    console.log(newSkill)
    fetch('http://localhost:3000/skill/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSkill)
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
    <div className="bg-base-300 pt-10 pb-10 rounded-lg">
        <h1 className="text-center text-6xl font-semibold">Add new Skills</h1>
        <form onSubmit={handleSkill} className="m-10 w-[600px]">
          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Add URL">skill image url</label>
          <input name="photo" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Add skill url"/>
          </div>

          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Add skill name">skill name</label>
          <input name="name" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Add skill name" />
          </div>

          <input className='bg-[#e88b2e] text-3xl mt-4 py-2 rounded-2xl w-full text-white font-semibold' type="submit" value="submit" />

        </form>
    </div>
  )
}

export default AddSkills