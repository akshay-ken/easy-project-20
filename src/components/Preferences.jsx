import { useState } from "react";

export function Preferences({ ref }) {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function handleChangeNewProdPref() {
    setWantsNewProdInfo((prevPref) => !prevPref);
  }
  function handleChangeUpdateProdPref() {
    setWantsProdUpdateInfo((prevPref) => !prevPref);
  }
  function reset() {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  }

  ref.current.reset = reset;

  ref.current.selectedPreferences = {
    newProductInfo: wantsNewProdInfo,
    productUpdateInfo: wantsProdUpdateInfo,
  };

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            id="pref-new"
            checked={wantsNewProdInfo}
            onChange={handleChangeNewProdPref}
          />
          <span>New Products</span>
        </label>

        <label>
          <input
            type="checkbox"
            id="pref-updates"
            checked={wantsProdUpdateInfo}
            onChange={handleChangeUpdateProdPref}
          />
        </label>
        <span>Product Updates</span>
      </div>
    </>
  );
}
