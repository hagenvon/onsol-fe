import { Card, Center, Container } from "@mantine/core";
import "../App.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const { connected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected) {
      navigate("/tutorial");
    }
  }, [connected]);

  return (
    <Center style={{ width: "100%", height: "100%" }}>
      <Container>
        <Card style={{ borderRadius: 0 }}>
          Share and cross promote your Links, NFTs, social links, and more on
          one page.
          <WalletMultiButton />
        </Card>
      </Container>
    </Center>
  );
}
