describe("Sipariş Kontrol Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/sipariskontrolformu"); 
  });

  it("Sayfa başlığını ve fiyat bilgisini kontrol eder", () => {
    cy.contains("h1", "Position Absloute Acı Pizza").should("be.visible");
    cy.contains("span", "85.5₺").should("be.visible");
  });

  it("Zorunlu alanlar dolmadan butonun aktif olmaması gerektiğini kontrol eder", () => {
    cy.get("button[type='submit']").should("be.disabled");
  });

  it("Pizza boyutu seçildiğinde butonun hala aktif olmaması gerektiğini kontrol eder", () => {
    cy.get("input[name='size']").first().check();
    cy.get("button[type='submit']").should("be.disabled");
  });

  it("Hamur kalınlığı seçildiğinde butonun hala aktif olmaması gerektiğini kontrol eder", () => {
    cy.get("select").select("İnce");
    cy.get("button[type='submit']").should("be.disabled");
  });

  it("Teslim alacak kişi girildiğinde butonun aktif hale gelmesini kontrol eder", () => {
    cy.get("input[type='text']").type("Ahmet Yılmaz");
    cy.get("button[type='submit']").should("be.enabled");
  });

  it("Ekstra malzeme ekleyip çıkarma işlemini test eder", () => {
    cy.get("input[type='checkbox']").first().check();
    cy.contains("h2", "Ekstra Tutarı: 5₺").should("be.visible");

    cy.get("input[type='checkbox']").first().uncheck();
    cy.contains("h2", "Ekstra Tutarı: 0₺").should("be.visible");
  });

  it("Pizza adedini arttırdığında fiyatın doğru hesaplanmasını kontrol eder", () => {
    cy.get("button").contains("+").click();
    cy.contains("h2", "Toplam Tutar: 171₺").should("be.visible");
  });

  it("Pizza adedini azalttığında fiyatın doğru hesaplanmasını kontrol eder", () => {
    cy.get("button").contains("+").click();
    cy.get("button").contains("-").click();
    cy.contains("h2", "Toplam Tutar: 85.5₺").should("be.visible");
  });

  it("Form başarıyla gönderildiğinde yönlendirme olup olmadığını test eder", () => {
    cy.get("input[name='size']").first().check();
    cy.get("select").select("İnce");
    cy.get("input[type='text']").type("Ahmet Yılmaz");
    cy.get("button[type='submit']").click();

    cy.url().should("include", "/onay"); // Form gönderildiğinde yönlendirme olup olmadığını test et
  });
});
