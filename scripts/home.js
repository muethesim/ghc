const collapsibleHeaders = document.querySelectorAll(
    ".collapsible-header"
  );


  collapsibleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      if (content.classList.contains("expanded")) {
        content.style.maxHeight = null;
        content.classList.remove("expanded");

      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("expanded");

        collapsibleHeaders.forEach((otherHeader) => {
          if (otherHeader !== header) {
            const otherContent = otherHeader.nextElementSibling;
            otherContent.style.maxHeight = null;
            otherContent.classList.remove("expanded");
          }
        });
      }
    });
  });