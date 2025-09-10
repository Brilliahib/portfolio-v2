import CollectionContent from "./CollectionContent";
import CollectionHeading from "./CollectionHeading";

export default function CollectionWrapper() {
  return (
    <section className="space-y-7">
      <CollectionHeading />
      <CollectionContent />
    </section>
  );
}
