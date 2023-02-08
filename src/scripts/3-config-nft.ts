import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// 先ほどメモして残していた editionDrop のコントラクトアドレスをこちらに記載してください
const editionDrop = sdk.getContract(
  "0x2c25771E15816ddd6B2d1e16f8166722D31544D9",
  "edition-drop"
);

(async () => {
  try {
    await (
      await editionDrop
    ).createBatch([
      {
        name: "Member's Limited Sorare Batch",
        description: "sorareDAO にアクセスすることができる限定アイテムです",
        image: readFileSync("src/scripts/assets/sorare.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
