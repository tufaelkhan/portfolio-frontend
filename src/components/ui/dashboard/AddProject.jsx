
const AddProject = () => {

  const handleProject = (e) => {
    e.preventDefault()
    const form = e.target;
    const url = form.photo.value;
    const name = form.name.value;
    const live = form.live.value;
    const githubClient = form.client.value;
    const githubServer = form.server.value;
    const description = form.description.value;
    const featureValue = form.features.value;
    const technologyValue = form.technology.value
    const feature = featureValue.split(".")
    const technology = technologyValue.split(".")
    // console.log(feature, technology)
    const newProject = { url, name, live, githubClient, githubServer, description, feature, technology};
    console.log(newProject)
    fetch('https://portfolio-server-mocha-two.vercel.app/project/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject)
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
  }

  return (
    <div>
      <div className="bg-base-300 pt-10 pb-10 rounded-lg">
        <h1 className="text-center text-6xl font-semibold">Add new Project</h1>
        <form onSubmit={handleProject} className="m-10 w-[600px]">
          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Add URL">Project Image</label>
          <input name="photo" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="give project url"/>
          </div>

          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Project name">Project name</label>
          <input name="name" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Write Project Name" />
          </div>

          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Project live Link">Project Live Link</label>
          <input name="live" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Give Live Link" />
          </div>

          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Project Github Client">Project Github Client</label>
          <input name="client" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Project Github Client" />
          </div>
          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Project Github Server">Project Github Server</label>
          <input name="server" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Project Github Server" />
          </div>

          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Project Description">Project Description</label>
          <textarea name="description" id="" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg h-full min-h-44" placeholder="Write Project Description"></textarea>
          </div>
          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Add Features">Features </label>
          <textarea name="features" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Add Features" />
          <p>Features will be spited by full stop (.)</p>
          </div>

          <div className="mb-7">
          <label className="text-xl p-2 mb-4" htmlFor="Add Technology">Technology </label>
          <textarea name="technology" className="text-2xl p-2 py-2 w-full mt-2 border border-[#e88b2e] rounded-lg" type="text" placeholder="Add Technology" />
          <p>Technology will be spited by full stop (.)</p>
          </div>
          <input className='bg-[#e88b2e] text-3xl mt-4 py-2 rounded-2xl w-full text-white font-semibold' type="submit" value="submit" />

        </form>
    </div>
    </div>
  )
}

export default AddProject