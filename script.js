function fetchBatteryInfo() {
    const batteryName = document.getElementById("batteryName").value;

    // Example data with URLs to external images
    const batteryData = {
        "Lithium Ion": {
            "electrolyte": "Lithium salt in organic solvent",
            "cathode": "Lithium cobalt oxide",
            "anode": "Graphite",
            "separator": "Polypropylene/polyethylene",
            "image": "https://as1.ftcdn.net/v2/jpg/02/95/09/92/1000_F_295099244_6NzM5ofTEFOuTBwUNsgHNL1Jty4JH3yD.jpg" // Change to a valid URL
        },
        "Lead Acid": {
            "electrolyte": "Sulfuric acid",
            "cathode": "Lead dioxide",
            "anode": "Lead",
            "separator": "Absorbent glass mat",
            "image": "https://cdn1.byjus.com/wp-content/uploads/2016/06/Lead-Acid-Battery-Charging-1-2.png" // Change to a valid URL
        },
        "PEMFC": {
            "electrolyte": "Proton exchange membrane (like Nafion), which conducts protons while blocking electrons.",
            "cathode": "Platinum-based electrode, where oxygen is reduced to form water.",
            "anode": "Platinum-based electrode, where hydrogen is oxidized to produce protons and electrons.",
            "separator": "A proton exchange membrane that separates the anode and cathode, allowing proton flow but blocking electrons.",
            "image": "https://www.researchgate.net/publication/334222897/figure/fig1/AS:776799692808195@1562214887665/The-working-principle-of-PEMFC.png" // Example image showing PEMFC structure
        },
        "SOFC": {
            "electrolyte": "Solid ceramic, typically zirconia, conducts oxygen ions.",
            "cathode": "Lanthanum strontium manganite, where oxygen is reduced to oxygen ions.",
            "anode": "Nickel-yttria-stabilized zirconia, where hydrogen or natural gas is oxidized.",
            "separator": "Solid ceramic electrolyte acts as a separator.",
            "image": "https://www.researchgate.net/publication/311542621/figure/fig1/AS:437591842529280@1481341433429/Schematic-diagram-of-a-solid-oxide-fuel-cell-showing-how-chemical-energy-is-directly.png"
        },
        "AFC": {
            "electrolyte": "Alkaline solution, typically potassium hydroxide.",
            "cathode": "Nickel-based materials, where oxygen is reduced.",
            "anode": "Platinum or other noble metals, where hydrogen is oxidized.",
            "separator": "Non-conductive separator to keep anode and cathode apart.",
            "image": "https://www.researchgate.net/publication/359287103/figure/fig1/AS:1139009531191302@1648572442652/Schematic-diagram-of-AFC.png"
        },
        "PAFC": {
            "electrolyte": "Phosphoric acid in a porous matrix.",
            "cathode": "Platinum-based, where oxygen is reduced to form water.",
            "anode": "Platinum-based, where hydrogen is oxidized.",
            "separator": "Phosphoric acid electrolyte serves as a separator.",
            "image": "https://www.researchgate.net/publication/261113765/figure/fig2/AS:296821323780098@1447779126398/Schematic-of-a-single-PAFC.png"
        },
        "MCFC": {
            "electrolyte": "Molten carbonate salts (lithium carbonate and potassium carbonate).",
            "cathode": "Electrode where oxygen reacts with carbon dioxide to form carbonate ions.",
            "anode": "Electrode where carbonate ions react with hydrogen to produce carbon dioxide and water.",
            "separator": "Molten carbonate electrolyte separates anode and cathode.",
            "image": "https://www.researchgate.net/publication/317347877/figure/fig2/AS:667920107585536@1536255971045/MCFC-modules-are-assemblies-of-basic-units-single-cells-stacked-together-with-the.png"
        },
        "Leclanche": {
            "electrolyte": "Ammonium chloride solution (aqueous).",
            "cathode": "Manganese dioxide, often with carbon as a conductor.",
            "anode": "Zinc, which is consumed during discharge.",
            "separator": "Porous material that allows ion flow but separates anode and cathode.",
            "image": "https://c8.alamy.com/zooms/9/a9c2b56ece9e435a8637176e937a290f/bb4da1.jpg"
        },
        "Dry Cell": {
            "electrolyte": "Ammonium chloride paste, designed to be dry to prevent leakage.",
            "cathode": "Manganese dioxide with carbon as a conductor.",
            "anode": "Zinc, which also acts as the battery casing.",
            "separator": "Porous separator that allows ion flow while separating anode and cathode.",
            "image": "https://hi-static.z-dn.net/files/d1a/dfd1a5f7dbaf2a30ce2cf1192163c9d8.jpg"
        },
        "Nickel Cadmium": {
            "electrolyte": "Potassium hydroxide (alkaline).",
            "cathode": "Nickel hydroxide, which accepts electrons during charging.",
            "anode": "Cadmium hydroxide, where electrons are released during discharge.",
            "separator": "Porous separator that allows ion flow while keeping anode and cathode separate.",
            "image": "https://cdn.britannica.com/16/63616-004-5D03EA06.gif"
        },
        "H2-O2": {
            "electrolyte": "Proton exchange membrane (like Nafion), which conducts protons but blocks electrons.",
            "cathode": "Oxygen-reducing electrode, often platinum-based, where oxygen is reduced to water.",
            "anode": "Hydrogen-oxidizing electrode, typically platinum-based, where hydrogen is oxidized to protons.",
            "separator": "Proton exchange membrane separating anode and cathode, allowing proton flow.",
            "image": "https://www.sarthaks.com/?qa=blob&qa_blobid=11286235073558919845" 
        }
    };

    const battery = batteryData[batteryName];

    if (battery) {
        const batteryInfo = `
            <h2>Battery Details</h2></br></br>
            <p><strong>Electrolyte:</strong> ${battery.electrolyte}</p></br>
            <p><strong>Cathode:</strong> ${battery.cathode}</p></br>
            <p><strong>Anode:</strong> ${battery.anode}</p></br>
            <p><strong>Separator:</strong> ${battery.separator}</p></br>
            <img src="${battery.image}" alt="${batteryName} charging" style="width: 100%;">
            <button style="align-items:center;margin:auto">
                <a href="${battery.image}" download style="text-decoration:None;background-color:transparent;">Download Battery Image</a>
            </button>
        `;
        document.getElementById("batteryInfo").innerHTML = batteryInfo;
    } else {
        document.getElementById("batteryInfo").innerHTML = "<p>Battery information not found.</p>";
    }

    return false; // Prevent form submission
}
