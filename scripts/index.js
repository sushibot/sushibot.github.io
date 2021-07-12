const project_array = [
  {
    project_name: "Lorem Ipsum",
    href: "#",
    project_image: "https://via.placeholder.com/450x219?text=Sushibot",
  },
  {
    project_name: "Lorem Ipsum",
    href: "#",
    project_image: "https://via.placeholder.com/450x219?text=Sushibot",
  },
  {
    project_name: "Lorem Ipsum",
    href: "#",
    project_image: "https://via.placeholder.com/450x219?text=Sushibot",
  },
  {
    project_name: "Lorem Ipsum",
    href: "#",
    project_image: "https://via.placeholder.com/450x219?text=Sushibot",
  },
  {
    project_name: "Lorem Ipsum",
    href: "#",
    project_image: "https://via.placeholder.com/450x219?text=Sushibot",
  },
  {
    project_name: "Lorem Ipsum",
    href: "#",
    project_image: "https://via.placeholder.com/450x219?text=Sushibot",
  },
];

(function () {
  const project_list = document.querySelector("#project-links");
  project_array.forEach((project) => {
    const project_list_item = document.createElement("li");
    const image_container = document.createElement("a");
    const image = document.createElement("img");
    const link_item_text = document.createElement("a");

    image.src = project.project_image;
    image.className = "image";
    image_container.className = "image-container";
    image_container.style.backgroundImage = project.project_image;
    project_list_item.className = "link-list-container";

    image_container.href = project.href;
    link_item_text.className = "link";
    link_item_text.textContent = project.project_name;

    image_container.append(image);
    image_container.append(link_item_text);
    project_list_item.append(image_container);
    project_list.append(project_list_item);
  });
})();
