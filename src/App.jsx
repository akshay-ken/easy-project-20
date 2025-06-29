function App() {
  return (
    <>
      <div class="border p-4 flex flex-col md:flex-row gap-4">
        <img src="…" class="w-full h-32 object-cover" />
        <div>
          <h2 class="text-xl">Viewport-based</h2>
          <p>md:flex-row only sees the window size.</p>
        </div>
      </div>

      <div class="max-w-sm mx-auto border p-4 @container">
        <div class="flex flex-col @md:flex-row gap-4">
          <img src="…" class="w-full h-32 object-cover" />
          <div>
            <h2 class="text-xl">Container-based</h2>
            <p>@container+@md only sees its parent’s width.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
