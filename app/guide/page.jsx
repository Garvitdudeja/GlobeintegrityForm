"use client";
import React, { useEffect, useState } from "react";

export default function Guide() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
  const content = document.querySelector(".guide-content");

  const handleScroll = () => {
    const sections = content.querySelectorAll("section");
    let current = "";

    const scrollY = content.scrollTop;
    const contentHeight = content.clientHeight;
    const threshold = 0.25 * contentHeight; // 25% height se pehle hi trigger

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - threshold) {
        current = section.getAttribute("id");
      }
    });

    setActiveId(current);
  };

  content?.addEventListener("scroll", handleScroll);
  return () => content?.removeEventListener("scroll", handleScroll);
}, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    const content = document.querySelector(".guide-content");
    if (section && content) {
      content.scrollTo({
        top: section.offsetTop - 140,
        behavior: "smooth",
      });
    }
  };

  const isActive = (id) => activeId === id;
  const isSubActive = (ids) => ids.includes(activeId);

  return (
    <div className="guide-wrapper">
  <aside className="guide-sidebar">
    <h3 className="heading28">Guide to<br/>Life Insurance</h3>
    <div className="headingBorder"></div>

    <ul className="guide-menu">
      <li className={isActive("welcome") ? "active" : ""}>
        <a href="#welcome" onClick={(e) => handleClick(e, "welcome")}>Welcome</a>
      </li>
      <li className={isActive("key-terms") ? "active" : ""}>
        <a href="#key-terms" onClick={(e) => handleClick(e, "key-terms")}>Key Terms</a>
      </li>

      <li className={`has-submenu ${isSubActive(["what-is", "types-of-insurance"]) ? "open" : ""}`}>
        <a href="#insurance-basics" onClick={(e) => handleClick(e, "insurance-basics")}>Life Insurance Basics</a>
        <ul className="submenu">
          <li className={isActive("what-is") ? "active" : ""}>
            <a href="#what-is" onClick={(e) => handleClick(e, "what-is")}>What is life insurance?</a>
          </li>
          <li className={isActive("types-of-insurance") ? "active" : ""}>
            <a href="#types-of-insurance" onClick={(e) => handleClick(e, "types-of-insurance")}>Are there different types?</a>
          </li>
        </ul>
      </li>

      <li className={`has-submenu ${isSubActive(["why-permanent", "build-wealth", "cash-growth", "access-funds"]) ? "open" : ""}`}>
        <a href="#build-wealth" onClick={(e) => handleClick(e, "build-wealth")}>Build Wealth with Insurance</a>
        <ul className="submenu">
          <li className={isActive("why-permanent") ? "active" : ""}>
            <a href="#why-permanent" onClick={(e) => handleClick(e, "why-permanent")}>Why permanent insurance?</a>
          </li>
          <li className={isActive("build-wealth") ? "active" : ""}>
            <a href="#build-wealth-method" onClick={(e) => handleClick(e, "build-wealth-method")}>How to build wealth?</a>
          </li>
          <li className={isActive("cash-growth") ? "active" : ""}>
            <a href="#cash-growth" onClick={(e) => handleClick(e, "cash-growth")}>Cash value growth</a>
          </li>
          <li className={isActive("access-funds") ? "active" : ""}>
            <a href="#access-funds" onClick={(e) => handleClick(e, "access-funds")}>Accessing funds</a>
          </li>
        </ul>
      </li>

      <li className={`has-submenu ${isSubActive(["leverage-funds"]) ? "open" : ""}`}>
        <a href="#cash-usage" onClick={(e) => handleClick(e, "cash-usage")}>Using Your Cash Value</a>
        <ul className="submenu">
          <li className={isActive("leverage-funds") ? "active" : ""}>
            <a href="#leverage-funds" onClick={(e) => handleClick(e, "leverage-funds")}>Leverage cash value funds</a>
          </li>
        </ul>
      </li>

      <li className={`has-submenu ${isSubActive(["coverage-amount", "coverage-works", "estimate-coverage"]) ? "open" : ""}`}>
        <a href="#coverage-needs" onClick={(e) => handleClick(e, "coverage-needs")}>Know Your Coverage Needs</a>
        <ul className="submenu">
          <li className={isActive("coverage-amount") ? "active" : ""}>
            <a href="#coverage-amount" onClick={(e) => handleClick(e, "coverage-amount")}>Coverage amount</a>
          </li>
          <li className={isActive("coverage-works") ? "active" : ""}>
            <a href="#coverage-works" onClick={(e) => handleClick(e, "coverage-works")}>How it works</a>
          </li>
          <li className={isActive("estimate-coverage") ? "active" : ""}>
            <a href="#estimate-coverage" onClick={(e) => handleClick(e, "estimate-coverage")}>Estimate coverage</a>
          </li>
        </ul>
      </li>

      <li className={`has-submenu ${isSubActive(["compare-protection", "tax-efficient"]) ? "open" : ""}`}>
        <a href="#compare-products" onClick={(e) => handleClick(e, "compare-products")}>Compare Products</a>
        <ul className="submenu">
          <li className={isActive("compare-protection") ? "active" : ""}>
            <a href="#compare-protection" onClick={(e) => handleClick(e, "compare-protection")}>Protection</a>
          </li>
          <li className={isActive("tax-efficient") ? "active" : ""}>
            <a href="#tax-efficient" onClick={(e) => handleClick(e, "tax-efficient")}>Tax-efficient wealth</a>
          </li>
        </ul>
      </li>

      <li className={`has-submenu ${isSubActive(["ul-security", "term-policy", "bottom-line"]) ? "open" : ""}`}>
        <a href="#recommendation" onClick={(e) => handleClick(e, "recommendation")}>Globe Integrity’s Recommendation</a>
        <ul className="submenu">
          <li className={isActive("ul-security") ? "active" : ""}>
            <a href="#ul-security" onClick={(e) => handleClick(e, "ul-security")}>Universal Life</a>
          </li>
          <li className={isActive("term-policy") ? "active" : ""}>
            <a href="#term-policy" onClick={(e) => handleClick(e, "term-policy")}>Go big on Term?</a>
          </li>
          <li className={isActive("bottom-line") ? "active" : ""}>
            <a href="#bottom-line" onClick={(e) => handleClick(e, "bottom-line")}>Bottom Line</a>
          </li>
        </ul>
      </li>

      <li className={isActive("cost-estimate") ? "active" : ""}>
        <a href="#cost-estimate" onClick={(e) => handleClick(e, "cost-estimate")}>Get a Cost Estimate</a>
      </li>
    </ul>
  </aside>

  <main className="guide-content" style={{ flex: 1, overflowY: "scroll", padding: "40px" }}>
    <section id="welcome"><h2>Welcome</h2><p>{dummy()}</p></section>
    <section id="key-terms"><h2>Key Terms</h2><p>{dummy()}</p></section>
    <section id="what-is"><h3>What is life insurance?</h3><p>{dummy()}</p></section>
    <section id="types-of-insurance"><h3>Types of life insurance</h3><p>{dummy()}</p></section>
    <section id="why-permanent"><h3>Why permanent life insurance?</h3><p>{dummy()}</p></section>
    <section id="build-wealth-method"><h3>Build wealth with insurance</h3><p>{dummy()}</p></section>
    <section id="cash-growth"><h3>Cash Value Growth</h3><p>{dummy()}</p></section>
    <section id="access-funds"><h3>Accessing Your Funds</h3><p>{dummy()}</p></section>
    <section id="leverage-funds"><h3>Leverage Cash Value</h3><p>{dummy()}</p></section>
    <section id="coverage-amount"><h3>Coverage Amount</h3><p>{dummy()}</p></section>
    <section id="coverage-works"><h3>How Coverage Works</h3><p>{dummy()}</p></section>
    <section id="estimate-coverage"><h3>Estimate Life Insurance</h3><p>{dummy()}</p></section>
    <section id="compare-protection"><h3>Compare Protection</h3><p>{dummy()}</p></section>
    <section id="tax-efficient"><h3>Tax-Efficient Building</h3><p>{dummy()}</p></section>
    <section id="ul-security"><h3>Universal Life Security</h3><p>{dummy()}</p></section>
    <section id="term-policy"><h3>Why Not Term?</h3><p>{dummy()}</p></section>
    <section id="bottom-line"><h3>The Bottom Line</h3><p>{dummy()}</p></section>
    <section id="cost-estimate"><h2>Cost Estimate</h2><p>{dummy()}</p></section>
  </main>
</div>

  );
}

function dummy() {
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `.repeat(100);
}
