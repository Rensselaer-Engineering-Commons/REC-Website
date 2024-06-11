import { Title, MainSection, Information } from '../components/components.ts'

const Projects = () => {
    return (
        <div>
            <header className="h-48 min-h-[250px] relative flex flex-col justify-around align-middle">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Projects</h1>
                </div>
            </header>
            {/* Table was grabbed from this open source project https://tailwindcomponents.com/component/responsive-table-5 */}
            <main className="bg-gray-200">
                <section class="container mx-auto py-52 font-mono">
                  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                      <table class="w-full">
                        <thead>
                          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th class="px-4 py-3">Name</th>
                            <th class="px-4 py-3">Project Lead</th>
                            <th class="px-4 py-3">Status</th>
                            <th class="px-4 py-3">Start Date</th>
                          </tr>
                        </thead>
                        <tbody class="bg-white">
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Sufyan</p>
                                  <p class="text-xs text-gray-600">Developer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">22</td>
                            <td class="px-4 py-3 text-xs border">
                              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                            </td>
                            <td class="px-4 py-3 text-sm border">6/4/2000</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">Stevens</p>
                                  <p class="text-xs text-gray-600">Programmer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-md font-semibold border">27</td>
                            <td class="px-4 py-3 text-xs border">
                              <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
                            </td>
                            <td class="px-4 py-3 text-sm border">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Nora</p>
                                  <p class="text-xs text-gray-600">Designer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-md font-semibold border">17</td>
                            <td class="px-4 py-3 text-xs border">
                              <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Nnacceptable </span>
                            </td>
                            <td class="px-4 py-3 text-sm border">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Ali</p>
                                  <p class="text-xs text-gray-600">Programmer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 border text-md font-semibold">23</td>
                            <td class="px-4 py-3 border text-xs">
                              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                            </td>
                            <td class="px-4 py-3 border text-sm">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Khalid</p>
                                  <p class="text-xs text-gray-600">Designer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 border text-md font-semibold">20</td>
                            <td class="px-4 py-3 border text-xs">
                              <span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Pending </span>
                            </td>
                            <td class="px-4 py-3 border text-sm">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Nasser</p>
                                  <p class="text-xs text-gray-600">Pen Tester</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 border text-md font-semibold">29</td>
                            <td class="px-4 py-3 border text-xs">
                              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                            </td>
                            <td class="px-4 py-3 border text-sm">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Mohammed</p>
                                  <p class="text-xs text-gray-600">Web Designer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 border text-md font-semibold">38</td>
                            <td class="px-4 py-3 border text-xs">
                              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                            </td>
                            <td class="px-4 py-3 border text-sm">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Saad</p>
                                  <p class="text-xs text-gray-600">Data</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 border text-md font-semibold">19</td>
                            <td class="px-4 py-3 border text-xs">
                              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                            </td>
                            <td class="px-4 py-3 border text-sm">6/10/2020</td>
                          </tr>
                          <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold">Sami</p>
                                  <p class="text-xs text-gray-600">Developer</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 border text-md font-semibold">21</td>
                            <td class="px-4 py-3 border text-xs">
                              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                            </td>
                            <td class="px-4 py-3 border text-sm">6/10/2020</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
            </main>
        </div>
    )
}

export default Projects