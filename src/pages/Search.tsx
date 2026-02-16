import { useState } from "react";
import { freeScripts, FreeScript, scriptSettings } from "@/data/freeScripts";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedScript, setSelectedScript] = useState<FreeScript | null>(null);

  const filteredScripts = freeScripts.filter(
    (script) =>
      script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <header className="header-gradient text-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-1">{scriptSettings.pageTitle}</h1>
          <p className="text-sm opacity-80">{scriptSettings.pageDescription}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-6 relative">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
          <input
            type="text"
            placeholder="Cari script gratis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-custom pl-11"
          />
        </div>

        <div className="rounded-xl p-4 mb-6 bg-primary/5 border-l-4 border-primary">
          <p className="text-sm text-muted-foreground">
            <i className="fas fa-info-circle text-primary mr-2"></i>
            {scriptSettings.downloadNote}
          </p>
        </div>

        {filteredScripts.length === 0 ? (
          <div className="text-center py-16">
            <i className="fas fa-search text-5xl text-muted-foreground mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Script tidak ditemukan</h3>
            <p className="text-muted-foreground text-sm">Coba kata kunci lain</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScripts.map((script) => (
              <div key={script.id} className="script-card">
                <img
                  src={script.image}
                  alt={script.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{script.category}</span>
                    <span className="text-[10px] text-muted-foreground">v{script.version}</span>
                  </div>
                  <h3 className="font-bold text-base mb-1">{script.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {script.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span><i className="fas fa-file-archive mr-1"></i>{script.fileSize}</span>
                    <span><i className="fas fa-code-branch mr-1"></i>v{script.version}</span>
                    <span><i className="fas fa-calendar-alt mr-1"></i>{script.uploadDate}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className="btn-outline text-xs"
                      onClick={() => setSelectedScript(script)}
                    >
                      <i className="fas fa-info-circle mr-1"></i> Detail
                    </button>
                    <a
                      href={script.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-youtube text-xs inline-flex items-center"
                    >
                      <i className="fab fa-youtube mr-1"></i> Review
                    </a>
                    <a
                      href={script.downloadFile}
                      download
                      className="btn-success text-xs inline-flex items-center"
                    >
                      <i className="fas fa-download mr-1"></i> Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedScript && (
        <div className="modal-overlay" onClick={() => setSelectedScript(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedScript(null)}
              className="absolute top-3 right-4 text-2xl text-muted-foreground hover:text-foreground"
            >
              &times;
            </button>
            <img
              src={selectedScript.image}
              alt={selectedScript.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-1">{selectedScript.title}</h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{selectedScript.category}</span>
              <span><i className="fas fa-code-branch mr-1"></i>v{selectedScript.version}</span>
              <span><i className="fas fa-file-archive mr-1"></i>{selectedScript.fileSize}</span>
              <span><i className="fas fa-calendar-alt mr-1"></i>{selectedScript.uploadDate}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{selectedScript.description}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={selectedScript.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-youtube text-sm inline-flex items-center"
              >
                <i className="fab fa-youtube mr-1"></i> Review YouTube
              </a>
              <a
                href={selectedScript.downloadFile}
                download
                className="btn-success text-sm inline-flex items-center"
              >
                <i className="fas fa-download mr-1"></i> Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
