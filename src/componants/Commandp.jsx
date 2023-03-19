import "react-cmdk/dist/cmdk.css";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState, useContext, useEffect, useCallback } from "react";
import { useColorMode } from "@chakra-ui/react";
import { PalletCtx } from "../context/PalletCotext";


const Commandp = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [page, setPage] = useState("root");
  const { open, setOpen } = useContext(PalletCtx);
  const [search, setSearch] = useState("");


  const handleOpenCommandPalette =() => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "c" && e.ctrlKey) {
        handleOpenCommandPalette();
        new Audio("/beep.mp3").play();
      }
    });
  }, []);

  const homeItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "#",
          },

          {
            id: "projects",
            children: "Projects",
            icon: "CloudIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("projects");
            },
          },

          {
            id: "about",
            children: "About",
            icon: "IdentificationIcon",
            href: "#",
          },
          {
            id: "contact",
            children: "Contact",
            icon: "PaperAirplaneIcon",
            href: "#",
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("settings");
            },
          },
        ],
      },
    ],
    search
  );
  const settingItems = filterItems(
    [
      {
        heading: "Settings",
        id: "settings",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("root");
            },
          },
          {
            id: "dark",
            children: "Enable Dark Mode",
            icon: "MoonIcon",
            href: "#",
          },
          {
            id: "light",
            children: "Enable Light Mode",
            icon: "SunIcon",
            href: "#",
          },
        ],
      },
    ],
    search
  );
  const projectItems = filterItems(
    [
      {
        heading: "Projects",
        id: "projects",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("root");
            },
          },
          {
            id: "react",
            children: "React Projects",
            icon: "AtSymbolIcon",
            href: "#",
          },
          {
            id: "vue",
            children: "Vue Projects",
            icon: "AtSymbolIcon",
            href: "#",
          },
        ],
      },
    ],
    search
  );

  return (
    <>
      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
        page={page}
      >
        <CommandPalette.Page id="root">
          {homeItems.length ? (
            homeItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(homeItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>

        <CommandPalette.Page id="projects">
          {projectItems.length ? (
            projectItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(projectItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>

        <CommandPalette.Page id="settings">
          {settingItems.length ? (
            settingItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(settingItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>
      </CommandPalette>
      {children}
    </>
  );
};

export default Commandp;
