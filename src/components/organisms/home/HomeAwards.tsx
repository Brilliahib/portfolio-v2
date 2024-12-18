export default function HomeAwards() {
  return (
    <>
      <section className="pt-24">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Awards</h1>
          <p className="tracking-tight">
            I have gained numerous awards and recognitions through the dedicated
            application of my skills and abilities in various fields.
          </p>
          <div>
            <ol className="space-y-4">
              <li className="flex justify-between text-sm">
                <h1 className="max-w-xs">
                  1st Winner Web Competition CITECH 2024
                </h1>
                <p>Okt 2024</p>
              </li>
              <hr />
              <li className="flex justify-between text-sm">
                <h1 className="max-w-xs">
                  1st Winner UI/UX Competition NIFC UMRI 2024
                </h1>
                <p>Mei 2024</p>
              </li>
              <hr />
              <li className="flex justify-between text-sm">
                <h1 className="max-w-xs">
                  2nd Winner Web Competition FESTIDA 2024
                </h1>
                <p>Jan 2024</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
