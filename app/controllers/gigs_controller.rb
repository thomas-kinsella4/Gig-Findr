class GigsController < ApplicationController

    before_action :find_gig, only: [:show]

    def index
        render json: Gig.all, status: :ok
    end

    def show
        render json: @gig, status: :ok
    end

    def update
        @gig.update(gig_params)
        render json: @gig, status: :accepted
    end

    private 

    def find_gig
        @gig = Gig.find(params[:id])
    end

    def gig_params
        params.permit(:venue, :date, :time, :genres, :description)
    end

end
