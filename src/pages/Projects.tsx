const Projects = () => {
  return (
      <div className="container mx-auto">
          <header className="h-48 min-h-[250px] relative flex flex-col justify-around items-center w-full">
              <div
                  className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
              ></div>
              <div className="flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-bold text-white">Projects</h1>
              </div>
          </header>
          <main className="w-full bg-gray-200 w-full">
            <section className="flex-grow w-full py-16 px-4 sm:px-6 lg:px-8">
                  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                      <div className="w-full overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-100">
                                  <tr>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Lead</th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                  </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                  <tr>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="flex items-center">
                                              <div className="flex-shrink-0 h-10 w-10">
                                                  <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                                              </div>
                                              <div className="ml-4">
                                                  <div className="text-sm font-medium text-gray-900">Sufyan</div>
                                                  <div className="text-sm text-gray-500">Developer</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">22</div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                              Acceptable
                                          </span>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6/4/2000</td>
                                  </tr>
                                  {/* Add more rows as needed */}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </section>
          </main>
      </div>
  );
}

export default Projects;
