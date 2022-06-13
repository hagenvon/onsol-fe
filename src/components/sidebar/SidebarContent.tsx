import { SidebarContentNav } from "./SidebarContentNav";
import {
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export function SidebarContent() {
  return (
    <div>
      <div>LOGO</div>
      <div>PFP</div>
      <div>NAME</div>
      <div>WALLET</div>

      <WalletMultiButton />

      <div>
        <SidebarContentNav />
      </div>
    </div>
  );
}
