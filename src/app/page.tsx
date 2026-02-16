import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ThemeSwitcher } from "@/components";
import { HOME_SUBTITLE, HOME_TITLE } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-column align-items-center justify-content-center p-4">
      <div className="container-narrow">
        <div className="flex justify-content-end mb-3">
          <ThemeSwitcher />
        </div>
        <Card
          title={HOME_TITLE}
          className="shadow-2"
          footer={
            <Button label="Get started" icon="pi pi-check" className="w-full" />
          }
        >
          <p className="m-0">{HOME_SUBTITLE}</p>
        </Card>
      </div>
    </div>
  );
}
