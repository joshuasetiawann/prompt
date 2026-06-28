import { DemoForm, PageHeader, Card, CardContent, ButtonLink } from "@scaffold/engine";
import { MODELS } from "@/lib/app";
import { WRITABLE } from "@/lib/forms";
import { requireUser } from "@/lib/auth";

const META = MODELS["DeliveryProof"];
const CONF = WRITABLE["DeliveryProof"];
export const metadata = { title: "New " + META.label };

export default async function Page() {
  await requireUser();
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <PageHeader
        title={"New " + META.label}
        subtitle={"Add a new " + META.label.toLowerCase() + " to your workspace"}
        actions={<ButtonLink href={META.route} variant="outline">Cancel</ButtonLink>}
      />
      <Card>
        <CardContent className="pt-6">
          <DemoForm
            action={"/api/submit?model=" + "DeliveryProof"}
            fields={CONF.fields as any}
            submitLabel={"Create " + META.label}
            successTitle="Saved"
            successMessage="The record was validated on the server and created in your local database."
          />
        </CardContent>
      </Card>
    </div>
  );
}
