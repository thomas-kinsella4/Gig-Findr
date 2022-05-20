class AgentsController < ApplicationController

    #signup
    def create
        agent = Agent.create!(agent_params)
        session[:agent_id] = agent.id
        render json: agent, status: :created
    end

    def show
        agent = Agent.find_by(id: session[:agent_id])
        if agent
            render json: agent, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private 

    def agent_params
        params.permit(:username, :password, :password_confirmation)
    end

end
