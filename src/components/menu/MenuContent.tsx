import { MenuContentNav } from "./MenuContentNav";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function MenuContent() {
  return (
    <div>
      <div>LOGO</div>
      <div>PFP</div>
      <div>NAME</div>
      <div>WALLET</div>

      <WalletMultiButton />

      <div>
        <MenuContentNav />
      </div>
    </div>
  );
}
