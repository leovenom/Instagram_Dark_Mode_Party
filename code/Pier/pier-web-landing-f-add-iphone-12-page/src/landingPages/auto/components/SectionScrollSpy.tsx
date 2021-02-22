import { useState, useEffect } from "react";
import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";

const Container = styled.section`
  margin-top: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  min-width: 100vw;
  background: white;
  z-index: 1;
  position: sticky;
  top: 0;
  transform: translate3d(0, 0, 0);
  transform-style: preserver-3d;
  backface-visibility: hidden;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoints.desktop} {
    overflow: hidden;
  }
`;

const List = styled.ul<{ numberOfSections: number }>`
  list-style-type: none;
  margin: 0 24px;
  padding: 0;
  display: flex;
  font-size: 14px;
  line-height: 20px;

  li {
    padding-right: 32px;
  }

  li:last-child {
    padding-right: 24px;
  }

  ${breakpoints.desktop} {
    margin: 0 40px;

    li:last-child {
      padding-right: 0;
    }
  }
`;

const ListItem = styled.li`
  a {
    display: block;
    padding: 16px 0;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    transition: all 250ms ease-out;
    white-space: nowrap;
  }

  a.active {
    color: ${({ theme }) => theme.colors.secondary600};
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary600};
  }
`;

interface Props {
  sections: {
    name: string;
    id: string;
  }[];
}

function getSectionsToSpyOn() {
  const sectionElements = document.querySelectorAll(".section-spy");
  const hasSectionsToSpyOn = sectionElements.length > 0;

  return [sectionElements, hasSectionsToSpyOn];
}

function spySections(setActive) {
  const [sectionElements, hasSectionsToSpyOn] = getSectionsToSpyOn();

  if (!hasSectionsToSpyOn) return;

  const sections = {};
  let i = null;

  Array.prototype.forEach.call(sectionElements, function (e) {
    sections[e.id] = e.offsetTop;
  });

  let offsets = [];

  for (i in sections) {
    offsets = [...offsets, { id: i, offset: sections[i] }];
  }

  window.onscroll = function () {
    setTimeout(() => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      const closest = offsets.reduce((a, b) => {
        return Math.abs(b.offset - scrollPosition) <
          Math.abs(a.offset - scrollPosition)
          ? b
          : a;
      });

      document.querySelector(".active")?.setAttribute("class", "");
      document
        .querySelector(`a[href*="${closest.id}"]`)
        ?.setAttribute("class", "active");

      setActive(closest.id);
    }, 1000);
  };
}

function SectionScrollSpy({ sections }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const element = document.querySelector("a.active") as HTMLAnchorElement;
    setActive(element.href.split("#").pop());

    spySections(setActive);

    return () => {
      spySections(setActive);
      window.onscroll = function () {};
    };
  }, []);

  useEffect(() => {
    if (active)
      document.querySelector("#spy-container").scrollLeft =
        (document.querySelector(`a[href*="${active}"]`) as HTMLAnchorElement)
          .offsetLeft - 24;
  }, [active]);

  return (
    <Container id="spy-container">
      <List numberOfSections={sections.length}>
        {sections.map(function ({ name, id }, i) {
          return (
            <ListItem key={id}>
              <a href={`#${id}`} className={i === 0 ? "active" : ""}>
                {name}
              </a>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default SectionScrollSpy;
