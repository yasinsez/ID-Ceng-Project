# ============================================================
#  Makefile for LaTeX Process Report
#  Run `make` in this directory to build process_report.pdf
# ============================================================

PDFLATEX  := /Library/TeX/texbin/pdflatex
TEX       := process_report.tex
PDF       := process_report.pdf

.PHONY: all clean distclean

all: $(PDF)

$(PDF): $(TEX)
	$(PDFLATEX) -interaction=nonstopmode $(TEX)
	$(PDFLATEX) -interaction=nonstopmode $(TEX)

clean:
	@rm -f *.aux *.log *.toc *.out *.lot *.lof *.fls *.fdb_latexmk *.synctex.gz

distclean: clean
	@rm -f $(PDF)
