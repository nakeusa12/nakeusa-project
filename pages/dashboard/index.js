import Editor from "@components/atoms/Editor";
import FormError from "@components/molecules/Forms/Error";
import Layout from "@components/molecules/Layout";
import useCreateValue from "@hooks/useCreateValue";
import withProtected from "@hooks/withProtected";
import { SignOut, storage } from "config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const create = useCreateValue();
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [stackSelected, setStackSelected] = useState([]);
  const [form, setForm] = useState({
    name: "",
    urlWebsite: "",
    category: "",
    // description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onImageUpload = (e) => {
    const file = e.target?.files[0];
    setFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const name = form.name;
    const urlWebsite = form.urlWebsite;
    const category = form.category;
    const description = dataDescription;
    const stack = stackSelected;
    const image = file;

    console.log({category, description});

    const storageRef = ref(storage, `projects/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            saveProject({
              name,
              urlWebsite,
              category,
              description,
              stack,
              image: downloadUrl,
            });
          },
          () => {
            saveProject({
              name,
              urlWebsite,
              category,
              description,
              stack,
              image: null,
            });
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const saveProject = async (item) => {
    const path = "/projects";
    const value = item;

    await create.pushValue(path, value);
  };

  return (
    <Layout>
      <div className="w-full left-40 top-10 absolute">
        <button className="border border-black py-2 px-4" onClick={SignOut}>
          Sign Out
        </button>
      </div>
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-col min-h-screen h-full">
        <h1 className="text-3xl mb-6">Post Project</h1>
        <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border border-gray-300 rounded p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            <Input
              name={"name"}
              value={form.name}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <Input
              name={"urlWebsite"}
              value={form.urlWebsite}
              onChange={handleChange}
              placeholder="Website Url"
            />
            <select
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="category"
              value={form.category}
              onChange={(e) => handleChange(e)}
            >
              {optionsCaterory.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <MultiSelect
              options={options}
              value={stackSelected}
              onChange={setStackSelected}
              labelledBy="Select"
              className="z-10 text-xl font-normal text-gray-700"
            />
            <div>
              <input
                type="file"
                placeholder="image"
                onChange={(e) => onImageUpload(e)}
              />
              {imagePreview && (
                <img src={imagePreview} alt="test" className="mt-4" />
              )}
            </div>
            {/* <textarea
              name="description"
              id="description"
              value={form.description}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            /> */}
            <Editor
              name="description"
              value={dataDescription}
              onChange={(data) => {
                setDataDescription(data);
              }}
            />

            {JSON.stringify(dataDescription)}

            <div className="text-center lg:text-left">
              <button
                disabled={isLoading}
                type="submit"
                className="inline-block px-7 py-3 disabled:bg-gray-500 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <span>Post Project</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default withProtected(Dashboard);

const Input = ({ placeholder, name, value, onChange }) => {
  return (
    <input
      id={name}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder={placeholder}
    />
  );
};

const optionsCaterory = [
  { label: "WebApps", value: "WebApps" },
  { label: "Web Design", value: "Web Design" },
  { label: "Progressive Web Apps", value: "Progressive Web Apps" },
];
const options = [
  { label: "React Js", value: "reactjs" },
  { label: "Svelte Js", value: "sveltejs" },
  { label: "Vue Js", value: "vuejs" },
];
