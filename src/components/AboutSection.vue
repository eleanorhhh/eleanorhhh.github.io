<template>
  <section id="about" class="py-20 px-6 bg-bg-paper">
    <div class="max-w-6xl mx-auto">
      <div
        class="inline-block bg-brand-yellow border-4 border-black px-6 py-2 mb-12 shadow-neo -rotate-2"
      >
        <h2 class="text-4xl font-black uppercase tracking-tight text-black">Who is Eleanor?</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-5 relative">
          <div
            class="border-4 border-black rounded-3xl overflow-hidden shadow-neo bg-white aspect-square"
          >
            <img
              src="../assets/profile.jpg"
              alt="Eleanor"
              class="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
          <div
            class="absolute -bottom-4 -right-4 bg-brand-orange text-white border-2 border-black px-4 py-1 font-bold rotate-6 shadow-neo"
          >
            CS Major 💻
          </div>
        </div>

        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white border-4 border-black p-8 shadow-neo relative">
            <h3 class="text-2xl font-black mb-4 text-brand-blue">從邏輯出發，探索互動的溫度</h3>

            <p class="text-lg font-bold leading-relaxed text-gray-800">
              我是 Eleanor，目前就讀資訊工程系大三。我喜歡用程式邏輯解決問題， 但在開發
              <span class="bg-brand-yellow px-1 border-b-2 border-black">Notion-like 編輯器</span>
              的過程中， 我發現自己更著迷於「人與介面之間的互動」。
            </p>

            <p class="text-lg font-bold leading-relaxed text-gray-800 mt-4">
              我不僅能撰寫穩定的後端架構，更能站在使用者的角度，
              思考如何透過動態效果與直覺設計，讓複雜的資訊變得平易近人。
              這也是為什麼我渴望進入雲科大互動系，深造跨領域的設計思維。
            </p>

            <div class="flex flex-wrap gap-3 mt-8">
              <span
                class="bg-brand-blue text-white border-2 border-black px-3 py-1 text-sm font-black"
                >Full-stack Dev</span
              >
              <span
                class="bg-brand-orange text-white border-2 border-black px-3 py-1 text-sm font-black"
                >UI/UX Design</span
              >
              <span
                class="bg-brand-yellow text-black border-2 border-black px-3 py-1 text-sm font-black"
                >Interactive Logic</span
              >
            </div>
          </div>

          <div class="bg-brand-yellow border-4 border-black p-4 shadow-neo flex items-center gap-4">
            <span class="text-3xl">💡</span>
            <p class="font-bold text-black">
              我的目標是成為一名「懂設計的工程師」，讓每一行程式碼都具備使用者體驗的靈魂。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-neo {
  transition: all 0.2s ease;
}
.shadow-neo:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);
}
</style>
