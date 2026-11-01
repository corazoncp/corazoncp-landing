{
  description = "El Corazón como Portal: Public Landing Page (corazoncp-landing) — Node.js 22 + Vite+ + Biome devShell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          name = "corazoncp-landing-devshell";
          packages = with pkgs; [
            nodejs_22
            pnpm
            biome
            tea
            git
          ];

          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
          '';
        };
      });
}
